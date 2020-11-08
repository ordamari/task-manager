
var initialData = {
    tasks: {
        t101: { id: 't101', contact: 'buy food', info:{media:'',show:true , tdList:[{title:'chips', isFinish:false},{title:'bamba', isFinish:true},{title:'apropo', isFinish:true}]} },
        t102: { id: 't102', contact: 'buy drink', info:{media:'',show:true,tdList:[{title:'kola', isFinish:false},{title:'spring', isFinish:true},{title:'orange juice', isFinish:true}]} },
        t103: { id: 't103', contact: 'choose song', info:{media:'https://www.youtube.com/watch?v=t4-Z8vVMRBs',show:true}},
        t104: { id: 't104', contact: 'invite friends', info:{media:'',show:true,tdList:[{title:'guy', isFinish:false},{title:'sapir', isFinish:true},{title:'oshri', isFinish:true}]} },
        t105: { id: 't105', contact: 'party', info:{media:'https://amp.thenationalnews.com/image/policy:1.1042483:1593608070/tr30-June-Ibiza.jpg?f=16x9&w=1200&$p$f$w=ae152f2',show:true} },
    },
    colums: {
        c101: {
            id: 'c101',
            title: 'Todo',
            taskIds: [ 't102', 't104']
        },
        c102: {
            id: 'c102',
            title: 'Doing',
            taskIds: ['t105', 't103']
        },
        c103: {
            id: 'c103',
            title: 'Done',
            taskIds: ['t101']
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
