function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    
    const reportList = id_list.reduce((acc, user)=> {
        acc[user] = []
        return acc
    }, {})


    report.forEach(v => { 
        const [userName, reportUserName] = v.split(" ");
        if (!reportList[reportUserName].includes(userName)) {
            reportList[reportUserName].push(userName);
        }
    });

    for (const reportUser in reportList) {
        if (reportList[reportUser].length >= k) {
            reportList[reportUser].forEach(user => { 
                answer[id_list.indexOf(user)]++;
            });
        }
    }

    return answer;
}
