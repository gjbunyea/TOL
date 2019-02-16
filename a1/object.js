let scenes = [
    { 
        "name": "opening",
        "begin": 0*60, //must be seconds
        "timespan": 3000, //must be milliseconds
        "nextsceneopts": ["explain","finale"], 
        "buttonopts": ["This is a test button","Here is another test button"]
    },
    { 
        "name": "explain",
        "begin": 4*60, //must be seconds
        "timespan": 5000, //must be milliseconds
        "nextsceneopts": ["opening","finale"], 
        "buttonopts": ["Back to start","where does this go?"]
    },
    { 
        "name": "finale",
        "begin": 15*60, //must be seconds
        "timespan": 5000, //must be milliseconds
        "nextsceneopts": ["opening","finale"], 
        "buttonopts": ["Back to start","where does this go?"]
    }
]