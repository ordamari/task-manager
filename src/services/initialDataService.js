
var initialData = {
    tasks: {
        t101: { id: 't101', contact: 'styling', info:{media:'',show:true} },
        t102: { id: 't102', contact: 'functionality', info:{media:'',show:true} },
        t103: { id: 't103', contact: 'add button', info:{media:'',show:true}},
        t104: { id: 't104', contact: '4', info:{media:'https://ordamari.github.io/protfolio/static/media/react.448ca321.png',show:true} },
        t105: { id: 't105', contact: '5', info:{media:'https://www.youtube.com/watch?v=MhntcA7_WxA',show:true} },
        t106: { id: 't106', contact: '6', info:{media:'',show:true, tdList:[{title:'do', isFinish:false},{title:'dodo', isFinish:true}]} },
        t107: { id: 't107', contact: '7', info:{media:'',show:true} },
        t108: { id: 't108', contact: '8', info:{media:'',show:true} },
        t109: { id: 't109', contact: '9', info:{media:'',show:true} },
        t110: { id: 't110', contact: '10', info:{media:'',show:true} },
        t111: { id: 't111', contact: '11', info:{media:'',show:true} },
        t112: { id: 't112', contact: '12', info:{media:'',show:true} },
        t113: { id: 't113', contact: '13', info:{media:'',show:true} },
    },
    colums: {
        c101: {
            id: 'c101',
            title: 'Todo',
            taskIds: ['t101', 't102', 't103', 't104']
        },
        c102: {
            id: 'c102',
            title: 'Doing',
            taskIds: ['t105', 't106', 't107', 't108', 't109']
        },
        c103: {
            id: 'c103',
            title: 'Done',
            taskIds: ['t110', 't111', 't112', 't113']
        },
    },
    columnOrder: ['c101', 'c102', 'c103']
}

var lockTask = ['t101','t102'];


function query() {
    return { ...initialData };
}

function updateData(data) {
    initialData = data
}


function getLocks() {
    return [...lockTask]
}

function updateLocks(locks) {
    lockTask=locks;
}

var dataService = {
    query,
    updateData,
    getLocks,
    updateLocks
}

export default dataService 
