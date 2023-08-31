// Import stylesheets
import { JSONPath } from 'jsonpath-plus';
import { navDataWithoutEjectorJSON } from './navdata';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>JSON PAth plus NAV</h1>`;
const resdiv: HTMLDivElement = document.getElementById('res');
/*
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_GLOBAL')].childGroups[?(@.id=='TASK_AllProductionRelevant')].links    6
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelFunctions')].childGroups[?(@.id=='FUNCTION_Demolding')].links    0
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_MoldChange')].links           4
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_InitSampling')].links         3
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_ProcessOptimizing')].links    2
*/

function wrapWalker(originalFn) {
  return (val, f) => {
    console.warn('JSON wrapwalks @', val, f);
    originalFn(val, f);
  };
}

JSONPath.prototype._walk = wrapWalker(JSONPath.prototype._walk);

const paths = [
  /* `*[?(@.id=='home-screen')].*[?(@.id=='VIEW_GLOBAL')].*[?(@.id=='TASK_AllProductionRelevant')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_GLOBAL')].childGroups[?(@.id=='TASK_AllProductionRelevant')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelFunctions')].childGroups[?(@.id=='FUNCTION_Demolding')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_MoldChange')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_InitSampling')].links`,*/
  // `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_ProcessOptimizing')].links`,
  // `$..[?(@.id=='TASK_ProcessOptimizing')]`,
  // `$..*[?(@.id=='TASK_ProcessOptimizing')]`,
  // `$..[?(@property == 'id' && @ == 'TASK_ProcessOptimizing')]^`,
  //`$..[?(@.id === "root")]`,
  // `$..*[?(@.id=="root")]`,
  // `$..[?(@property == 'id' && @ == 'root')]^`,
  //`$[id]`,
  //`$..links@other()`,
  //`$.*[?(@.id=='home-screen')].*[?(@.id=='VIEW_EngelTasks')].*[?(@.id=='TASK_InitSampling')].links@other()`,
  `$.*[?(@.id=='home-screen')].*[?(@.id=='VIEW_GIBTS_NED')].*[?(@.id=='TASK_InitSampling')].links@other()`,
];

let sumResults = 0;
let num = 0;
paths.forEach((p, i) => {
  const result = JSONPath({
    json: JSON.parse(navDataWithoutEjectorJSON),
    path: p,
    callback: (pl, plt, full) => {
      console.log('cb', full);
    },
    otherTypeCallback: (args) => {
      console.warn('OTHER', args);
      return true;
    },
    wrap: true,
  });

  num = i + 1;
  const numresults = (result as unknown[])?.length ?? 0;
  console.log(`Result of query #${num} yields ${numresults} results: `, result);
  sumResults += (result as unknown[])?.length ?? 0;
});

const text = `Found ${sumResults} result${
  sumResults !== 1 ? 's' : ''
} in ${num} queries`;

console.log(text);
resdiv.innerHTML = text;
