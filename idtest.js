var uniqid = require('uniqid');

function refreshData()
{
    x = 0.000001;  // 5 Seconds

    console.log(uniqid())

    setTimeout(refreshData, x*1000);
}


refreshData(); // execute function