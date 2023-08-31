export const navDataEjectorJSON = `
{
  "routes": [
      {
          "id": "Ejector1",
          "position": 10,          
          "nameKey": "system.S15",
          "imageKey": "Ejector1/navi/navi-ejector.svg",
          "viewId": "evs-view-model-view",
          "inputs": {
              "viewModelId": "Ejector1"
          }
      }
  ],
  "areas": [
    {
      "path": "areas[@id='home-screen']/childGroups[@id='VIEW_GLOBAL']/childGroups[@id='TASK_AllProductionRelevant']/links"    
      "position": 6
    },
    {
      "path": "areas[@id='home-screen']/childGroups[@id='VIEW_EngelFunctions']/childGroups[@id='FUNCTION_Demolding']/links"
      "position": 0
    }
  ]
`;

export const navDataWithoutEjectorJSON = `
{
  "id": "root",
  "routes": [
    {
      "id": "sequence",
      "nameKey": "system.S188",
      "imageKey": "FlexCycle1/navi/navi-sequence.svg",
      "viewId": "evs-sequence-editor"
    },
    {
      "id": "Parts",
      "commentTodo": "Find the right text key - no system.tx",
      "nameKey": "MOLD PARAMETERS",
      "imageKey": "Parts/navi/navi-mold-data.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "Parts"
      }
    },
    {
      "id": "ProgramSignal1.Input1",
      "commentTodo": "Find the right text key - no system.tx",
      "nameKey": "system.S245",
      "imageKey": "ProgramSignal1/navi/navi-digital-input.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "ProgramSignal1.Input1"
      }
    },
    {
      "id": "ProgramSignal1.Output1",
      "nameKey": "system.S244",
      "imageKey": "ProgramSignal1/navi/navi-digital-output.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "ProgramSignal1.Output1"
      }
    },
    {
      "id": "Mold1",
      "nameKey": "system.S8",
      "imageKey": "Mold1/navi/navi-mold.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "Mold1"
      }
    },
    {
      "id": "MoldHeight1",
      "nameKey": "system.S28",
      "imageKey": "MoldHeight1/navi/navi-mold-height.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "MoldHeight1"
      }
    },
    {
      "id": "AirValve1",
      "nameKey": "system.S61",
      "imageKey": "AirValve1/navi/navi-air-valve.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "AirValve1"
      }
    },
    {
      "id": "CoreMove",
      "nameKey": "system.S14",
      "imageKey": "Core/navi/navi-core-move.svg",
      "showGroupTitle": false,
      "childRoutes": [
        {
          "id": "CoreMove1",
          "commentTodo": "Find the right text key for instances",
          "nameKey": "CORE MOVING PLATEN 1",
          "imageKey": "Core/navi/navi-core-move.svg",
          "position": 10,
          "viewId": "evs-view-model-view",
          "inputs": {
            "viewModelId": "CoreMove1"
          }
        },
        {
          "id": "CoreMove2",
          "commentTodo": "Find the right text key for instances",
          "nameKey": "CORE MOVING PLATEN 2",
          "imageKey": "Core/navi/navi-core-move.svg",
          "position": 20,
          "viewId": "evs-view-model-view",
          "inputs": {
            "viewModelId": "CoreMove2"
          }
        },
        {
          "id": "CoreMove3",
          "commentTodo": "Find the right text key for instances",
          "nameKey": "CORE MOVING PLATEN 3",
          "imageKey": "Core/navi/navi-core-move.svg",
          "position": 30,
          "viewId": "evs-view-model-view",
          "inputs": {
            "viewModelId": "CoreMove3"
          }
        }
      ]
    },
    {
      "id": "InjectionUnit1.PrePostInj",
      "nameKey": "system.S1077",
      "imageKey": "InjectionUnit1/navi/navi-injection.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "InjectionUnit1.PrePostInj"
      }
    },
    {
      "id": "InjectionUnit1.PlastInj",
      "nameKey": "system.S1079",
      "imageKey": "InjectionUnit1/navi/navi-plasticizing.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "InjectionUnit1.PlastInj"
      }
    },
    {
      "id": "Nozzle1",
      "nameKey": "system.S21",
      "imageKey": "Nozzle1/navi/navi-nozzle.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "Nozzle1"
      }
    },
    {
      "id": "CylinderHeating1",
      "commentTodo": "Find the right text key for instances",
      "nameKey": "system.S1042",
      "imageKey": "Heating/navi/navi-cylinder-heating.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "CylinderHeating1"
      }
    },
    {
      "id": "MoldHeating1",
      "nameKey": "system.S1043",
      "imageKey": "Heating/navi/navi-mold-heating.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "MoldHeating1"
      }
    },
    {
      "id": "CommonMonitoring1",
      "commentTodo": "Find the right text key - no system.tx",
      "nameKey": "MONITORING",
      "viewId": "evs-view-model-view",
      "imageKey": "General/navi/navi-not-available.svg",
      "inputs": {
        "viewModelId": "CommonMonitoring1"
      }
    },
    {
      "id": "InjectionUnit1.PlastUnit",
      "comment": "Find the right text key - no system.tx",
      "nameKey": "Plasticizing unit",
      "imageKey": "InjectionUnit1/navi/navi-plasticizing-unit-data.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "InjectionUnit1.PlastUnit"
      }
    },
    {
      "id": "InjectionUnit1.IqWeightControl",
      "nameKey": "system.S2030",
      "imageKey": "InjectionUnit1/navi/navi-iq-weight-control.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "InjectionUnit1.IqWeightControl"
      }
    },
    {
      "id": "ChargeAmp1",
      "nameKey": "system.S17",
      "imageKey": "ChargeAmp1/navi/navi-charge-amplifier.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "ChargeAmp1"
      }
    },
    {
      "id": "SprueEjector1",
      "nameKey": "system.S96",
      "imageKey": "SprueEjector1/navi/navi-sprue-ejector.svg",
      "viewId": "evs-view-model-view",
      "inputs": {
        "viewModelId": "SprueEjector1"
      }
    }
  ],
  "areas": [
    {
      "id": "home-screen",
      "childGroups": [
        {
          "id": "VIEW_GLOBAL",
          "position":10,          
          "childGroups": [
            {
              "commentTodo": "General naming for tasks and ressource keys",
              "id": "TASK_AllProductionRelevant",
              "nameKey": "Production",
              "imageKey": "General/illu/production.svg",
              "links": [
                {
                  "id": "sequence"
                },
                {
                  "id": "Parts"
                },
                {
                  "id": "ProgramSignal1.Input1"
                },
                {
                  "id": "ProgramSignal1.Output1"
                },
                {
                  "id": "Mold1"
                },
                {
                  "id": "MoldHeight1"
                },
                {
                  "id": "SprueEjector1"
                },
                {
                  "id": "AirValve1"
                },
                {
                  "id": "CoreMove"
                },
                {
                  "id": "InjectionUnit1.PrePostInj"
                },
                {
                  "id": "InjectionUnit1.PlastInj"
                },
                {
                  "id": "Nozzle1"
                },
                {
                  "id": "ChargeAmp1"
                },
                {
                  "id": "CylinderHeating1"
                },
                {
                  "id": "MoldHeating1"
                },
                {
                  "id": "CommonMonitoring1"
                },
                {
                  "id": "InjectionUnit1.IqWeightControl"
                }
              ]
            },
            {
              "id": "Task_System",
              "nameKey": "System",
              "imageKey": "General/illu/settings.svg",
              "position":-10,              
              "links": [
                {
                  "id": "InjectionUnit1.PlastUnit"
                }
              ]
            }
          ]
        },
        {
          "id": "VIEW_EngelFunctions",
          "nameKey": "Components",
          "position":20,
          "childGroups": [
            {
              "id": "FUNCTION_InjectionUnit",
              "nameKey": "Injection unit",
              "imageKey": "General/illu/injection-unit.svg",
              "links": [
                {
                  "id": "InjectionUnit1.PrePostInj"
                },
                {
                  "id": "InjectionUnit1.PlastInj"
                },
                {
                  "id": "Nozzle1"
                },
                {
                  "id": "ChargeAmp1"
                },
                {
                  "id": "CylinderHeating1"
                },
                {
                  "id": "CommonMonitoring1"
                },
                {
                  "id": "InjectionUnit1.IqWeightControl"
                }
              ]
            },
            {
              "id": "FUNCTION_Mold",
              "nameKey": "Mold area",
              "imageKey": "General/illu/mold.svg",
              "links": [
                {
                  "id": "Parts"
                },
                {
                  "id": "Mold1"
                },
                {
                  "id": "MoldHeight1"
                },
                {
                  "id": "AirValve1"
                },
                {
                  "id": "CoreMove"
                },
                {
                  "id": "MoldHeating1"
                }
              ]
            },
            {
              "id": "FUNCTION_Demolding",
              "nameKey": "Part removal",
              "imageKey": "General/illu/demolding.svg",
              "links": [
                {
                  "id": "SprueEjector1"
                },
                {
                  "id": "CoreMove"
                }
              ]
            },
            {
              "id": "FUNCTION_Peripherie",
              "nameKey": "Peripheral unit",
              "imageKey": "General/illu/conveyor.svg",
              "links": [
                {
                  "id": "ProgramSignal1.Input1"
                },
                {
                  "id": "ProgramSignal1.Output1"
                }
              ]
            },
            {
              "id": "FUNCTION_Office",
              "nameKey": "Office",
              "imageKey": "General/illu/document.svg",
              "links": [
                {
                  "id": "sequence"
                }
              ]
            }
          ]
        },
        {
          "id": "VIEW_EngelTasks",
          "nameKey": "Tasks",
          "position":30,
          "childGroups": [
            {
              "id": "TASK_MoldChange",
              "nameKey": "Conversion",
              "imageKey": "General/illu/mold-change.svg",
              "links": [
                {
                  "id": "sequence"
                },
                {
                  "id": "Parts"
                },
                {
                  "id": "Mold1"
                },
                {
                  "id": "MoldHeight1"
                },
                {
                  "id": "SprueEjector1"
                },
                {
                  "id": "CoreMove"
                },
                {
                  "id": "CylinderHeating1"
                },
                {
                  "id": "MoldHeating1"
                }
              ]
            },
            {
              "id": "TASK_ProductionPreparation",
              "nameKey": "Prepare for production",
              "imageKey": "General/illu/machine.svg",
              "links": [
                {
                  "id": "Parts"
                },
                {
                  "id": "ProgramSignal1.Input1"
                },
                {
                  "id": "ProgramSignal1.Output1"
                }
              ]
            },
            {
              "id": "TASK_InitSampling",
              "nameKey": "Inital sampling",
              "imageKey": "General/illu/initial-sampling.svg",
              "links": [
                {
                  "id": "sequence"
                },
                {
                  "id": "Mold1"
                },
                {
                  "id": "MoldHeight1"
                },
                {
                  "id": "SprueEjector1"
                },
                {
                  "id": "CoreMove"
                },
                {
                  "id": "AirValve1"
                },
                {
                  "id": "InjectionUnit1.PrePostInj"
                },
                {
                  "id": "InjectionUnit1.PlastInj"
                },
                {
                  "id": "Nozzle1"
                },
                {
                  "id": "ChargeAmp1"
                },
                {
                  "id": "CylinderHeating1"
                },
                {
                  "id": "MoldHeating1"
                },
                {
                  "id": "InjectionUnit1.IqWeightControl"
                }
              ]
            },
            {
              "id": "TASK_ProductionStartStop",
              "nameKey": "Start / Stop production",
              "imageKey": "General/illu/on-off.svg",
              "links": [
                {
                  "id": "InjectionUnit1.PrePostInj"
                },
                {
                  "id": "InjectionUnit1.PlastInj"
                },
                {
                  "id": "Nozzle1"
                },
                {
                  "id": "CylinderHeating1"
                },
                {
                  "id": "MoldHeating1"
                },
                {
                  "id": "CommonMonitoring1"
                }
              ]
            },
            {
              "id": "TASK_ProcessOptimizing",
              "nameKey": "Optimization of production",
              "imageKey": "General/illu/optimize.svg",
              "links": [
                {
                  "id": "sequence"
                },
                {
                  "id": "Mold1"
                },
                {
                  "id": "SprueEjector1"
                },
                {
                  "id": "InjectionUnit1.PrePostInj"
                },
                {
                  "id": "InjectionUnit1.PlastInj"
                },
                {
                  "id": "ChargeAmp1"
                },
                {
                  "id": "CylinderHeating1"
                },
                {
                  "id": "MoldHeating1"
                },
                {
                  "id": "InjectionUnit1.IqWeightControl"
                }
              ]
            },
            {
              "id": "TASK_ProductionControl",
              "nameKey": "Check production",
              "imageKey": "General/illu/check-list.svg",
              "links": [
                {
                  "id": "InjectionUnit1.IqWeightControl"
                }
              ]
            },
            {
              "id": "TASK_Monitor",
              "nameKey": "Set monitorings",
              "imageKey": "General/illu/illu-not-available.svg",
              "links": [
                {
                  "id": "CommonMonitoring1"
                },
                {
                  "id": "InjectionUnit1.IqWeightControl"
                }
              ]
            },
            {
              "id": "TASK_Maintenance",
              "nameKey": "Maitenance",
              "imageKey": "General/illu/maintenance.svg"
            },
            {
              "id": "TASK_SearchError",
              "nameKey": "Search cause of the fault",
              "imageKey": "General/illu/attention.svg",
              "links": [
                {
                  "id": "CommonMonitoring1"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}`;
