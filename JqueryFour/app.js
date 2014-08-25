//document.ready

$(document).ready(function(){


    $.ajax({
        type: "GET",
        url: "http://localhost:9200/GetEmployees",
        timeout : 10000,
        dataType: 'json',
        success: function(data,status,requestObj){
            //xmlHttpRequest xhr
           var employeeList = data.Data.EmployeeList;
           var htmlString = '';
           for(var i= 0; i < employeeList.length; i++){
                htmlString += '<tr><td>' + i + '</td><td>' + employeeList[i].name +
                                    '</td><td>' + employeeList[i].title
                    +'</td><td>' + employeeList[i].city + '</td></tr>';

               }
            $('#employeeDetails tbody').append(htmlString);
        },
        error: function(requestObj,status,error){

        },
        complete: function(requestObj,status){

        }
    });


});


