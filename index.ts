// Import stylesheets
import { JSONPath } from 'jsonpath-plus';
import { navDataWithoutEjectorJSON } from './navdata';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>JSON PAth plus NAV</h1>`;
const resdiv: HTMLElement = document.getElementById('res');

const ta: HTMLTextAreaElement = document.getElementById(
  'ta'
) as HTMLTextAreaElement;
ta.style.width = '100%';
ta.style.minHeight = '500px';

/*
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_GLOBAL')].childGroups[?(@.id=='TASK_AllProductionRelevant')].links    6
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelFunctions')].childGroups[?(@.id=='FUNCTION_Demolding')].links    0
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_MoldChange')].links           4
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_InitSampling')].links         3
areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_EngelTasks')].childGroups[?(@.id=='TASK_ProcessOptimizing')].links    2
*/

function wrap(thisobj, originalFn, txt) {
  const boundFn = originalFn.bind(thisobj);
  const wrapFn = (...args) => {
    const retval = boundFn(...args);
    console.warn(`JSON ${txt} @`, args, retval);
    return retval;
  };
  /* wrapFn.name = `wrapped-${
    originalFn != null && originalFn.name !== '' ? originalFn.name : txt
  }`; */
  return wrapFn;
}

// JSONPath.prototype._walk = wrap(JSONPath.prototype._walk, 'walk');
// JSONPath.prototype.evaluate = wrap2(JSONPath.prototype.evaluate, 'eval');

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
  //`$.*[?(@.id=='home-screen')].*[?(@.id=='VIEW_GIBTS_NED')].*[?(@.id=='TASK_InitSampling')].links@other()`,
  `$.*[?(@.id=='home-screen')].*[?(@.id=='VIEW_EngelTasks')].*[?(@.id=='TASK_InitSampling')].links`,
  `$.*[?(@.id=='home-screen')].*[?(@.id=='VIEW_GIBTS_NED')].*[?(@.id=='TASK_InitSampling')].links`,
];

//queryPaths();
const myobj = {
  id: '1',
  name: '1',
  children: [
    {
      id: '12',
      name: '12',
      children: [],
    },
    {
      id: '11',
      name: '11',
      children: [],
    },
  ],
};
const rootObj = {
  children: [myobj],
};
let ensured;
ensured = ensureDescendantObj(rootObj, '1/11/111', 'id', 'children');

const someother = {
  id: 'a',
  theChild: {
    id: 'b',
    theChild: {
      id: 'c',
    },
  },
};
const somOtherRoot = {
  name: 'root',
  theChild: someother,
};

//ensured = ensureDescendantObj(somOtherRoot, 'a/b/c/d/e', 'id', 'theChild', false);

console.log('ENSURED', JSON.stringify(ensured, undefined, 3));

function queryPaths() {
  const jsonObject = JSON.parse(navDataWithoutEjectorJSON);

  let sumResults = 0;
  let num = 0;
  paths.forEach((p, i) => {
    const jsonPath = JSONPath({
      path: '',
      json: null,
      autostart: false,
      wrap: true,
    });

    // jsonPath._walk = wrap(jsonPath._walk, 'walk');
    jsonPath._eval = wrap(jsonPath, jsonPath._eval, '_eval');

    const result = jsonPath.evaluate(
      p,
      jsonObject,
      (pl, plt, full) => {
        console.log('cb', full);
      },
      (args) => {
        console.warn('OTHER', args);
        return true;
      }
    );

    num = i + 1;
    const numresults = (result as unknown[])?.length ?? 0;
    console.log(
      `Result of query #${num} yields ${numresults} results: `,
      result
    );
    sumResults += (result as unknown[])?.length ?? 0;
  });

  const text = `Found ${sumResults} result${
    sumResults !== 1 ? 's' : ''
  } in ${num} queries`;

  console.log(text);
  resdiv.innerHTML = text;
}
/*

{
  id: '1'
  children: [    
    {
      id: '11',
      children: [
        .....
      ]
    },
    {
      id: '12',
      children: [
        .....
      ]
    },
  ]
}


*/

/**
 *
 * jpath: areas[?(@.id=='home-screen')].childGroups[?(@.id=='VIEW_GLOBAL')].childGroups[?(@.id=='TASK_AllProductionRelevant')]
 * shortended: "home-screen/VIEW_GLOBAL/TASK_ALLProductionRelevant"
 *    implicitly assumed: path values held by property "id", aspects for creation if not present: "childGroups"
 *
 * 1: ~~test full path. if it yields a result, do nothing more: DONE. if NOT, goto 2~~
 * 2: test each segment recursively, starting at root object.
 * 3: on first segment failing the query:
 *    create object it based on the given template
 *
 *
 */
function ensureDescendantObj(
  obj: Record<string, any>,
  path: string,
  pathProperty: string,
  aspect: string,
  aspectIsArray = true
) {
  console.log(`provided obj`, JSON.stringify(obj, undefined, 2));
  const tokens = path.split(`/`);

  const jp = JSONPath({ autostart: false, wrap: true, path: '', json: null });
  jp._eval = wrap(jp, jp._eval, '_eval');
  let current = obj;
  tokens.forEach((tok, i) => {
    console.log(
      `#### working on current: ${current?.name ?? 'unknown'}`,
      current
    );
    const qResults: unknown[] = jp.evaluate(
      aspectIsArray
        ? `$.${aspect}[?(@.${pathProperty} === '${tok}')]` // works well with array structs like our view models
        : `$.${aspect}[?(@property === '${pathProperty}' && @ === '${tok}')]^`, // works with plain object based nesting
      // `$.${aspect}[?(@.${pathProperty} === '${tok}')]`, // use escape/quote mechanisme to allow nums...
      // `$.${aspect}[?(@property === '${pathProperty}' && @ === '${tok}')]^`, // use escape/quote mechanisme to allow nums...
      current,
      (found, type, full) => {
        console.log(`found:`, found);
      },
      (args) => true
    );

    if (qResults.length === 0) {
      console.error(`Found nothing!`);
      const inserted: Record<string, any> = {};
      Object.defineProperty(inserted, pathProperty, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: tok,
      });

      if (aspect != null && aspectIsArray) {
        Object.defineProperty(inserted, aspect, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: new Array(0),
        });
        if (Array.isArray(current[aspect])) {
          current[aspect].push(inserted);
        } else {
          console.error(`${aspect} is not an array in current`, current);
          throw new Error(`${aspect} is not an array in current`);
        }
      } else if (aspect != null && current[aspect] == null) {
        current[aspect] = inserted;
      } else {
        console.error(`${aspect} already present @${tok}`);
      }

      current = inserted;
    } else {
      console.log(`Found ${qResults.length}`);
      if (qResults.length > 1) {
        console.warn(
          `Found more than one object for path ${pathProperty}===${tok}`
        );
      }
      current = qResults[0];
    }
  });

  const text = JSON.stringify(obj, undefined, 2);
  console.log(`completed obj`, text);
  ta.value = text;
  return current;
}
