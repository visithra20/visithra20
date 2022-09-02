const formdata = {
  branchanddep: [
    {
      branch: "B.E",
      deps: ["ECE", "EEE", "MECH"],
    },
    {
      branch: "B.TECH",
      deps: ["IT", "CSE"],
    },
  ],
  exams: {
    semester: [
      {
        EEE: [
          {
            exam: "Semester",
            subjects: [
              ["19QSA011","Measurement and Instrumentation"],
              ["19HSM002", "Electrical Machines"],
              ["19ASR008", "Power Systems"],
              ["19CTR105","Microcontrollers" ]
            ],
            labs: [
              ["19QSA011", "Measurement and Instrumentation"],
              ["19HSM002", "Electrical Machines"]
            ]
          },

          {
            exam: "Model",
            subjects: [
              ["19QSA011M", "Measurement and InstrumentationMod"],
              ["19HSM002M", "Electrical MachinesMod"],
              ["19ASR008M", "Power SystemsMod"],
              ["19CTR105M", "MicrocontrollersMod"],
              ["19MNS202M", "Control SystemsMod"]
            ],
            labs: [
              ["19QSA011M", "Measurement and InstrumentationM"],
              ["19HSM002M", "Electrical MachinesM"]
            ],
          },

          {
            exam: "Internal",
            subjects: [
              ["19QSA011M", "Measurement and InstrumentationMod"],
              ["19HSM002M", "Electrical MachinesMod"],
              ["19ASR008M", "Power SystemsMod"],
              ["19CTR105M", "MicrocontrollersMod"],
              ["19MNS202M", "Control SystemsMod"]
            ],
            labs: [
              ["19QSA011M", "Measurement and InstrumentationM"],
              ["19HSM002M", "Electrical MachinesM"]
            ],
          },


        ],
      },
    ],
  },
};

export default formdata;
