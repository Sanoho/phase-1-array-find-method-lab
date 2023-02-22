// code your solution here
function superbowlWin(record) {
    const year = record.find((rec) => rec.result === 'W')
    
    return year ? year.year : undefined;
};
