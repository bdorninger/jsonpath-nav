// Import stylesheets
import { JSONPath } from 'jsonpath-plus';
import { navDataWithoutEjectorJSON } from './navdata';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>JSON PAth plus NAV</h1>`;

/*
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_GLOBAL')].childGroups[?(@.id=='TASK_AllProductionRelevant')].links    6
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelFunctions')].childGroups[?(@.id=='FUNCTION_Demolding')].links    0
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_MoldChange')].links           4
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_InitSampling')].links         3
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_ProcessOptimizing')].links    2
*/

const paths = [
  `*[?(@.id=='home-screen')].*[?(@.id=='VIEW_GLOBAL')].*[?(@.id=='TASK_AllProductionRelevant')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_GLOBAL')].childGroups[?(@.id=='TASK_AllProductionRelevant')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelFunctions')].childGroups[?(@.id=='FUNCTION_Demolding')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_MoldChange')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_InitSampling')].links`,
  `areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_ProcessOptimizing')].links`,
];

paths.forEach((p, i) => {
  const result = JSONPath({
    json: JSON.parse(navDataWithoutEjectorJSON),
    path: p,
    callback: (pl, plt, full) => {
      console.log('cb', full);
    },
  });

  console.log(`Result: ${i}`, result);
});
