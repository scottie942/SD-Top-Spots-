$(document).ready(function() {
$.getJSON("data.json", function(spots) {
    let spotsData = ""
   $.each(spots, function(key, value) {
       spotsData += "<tr>"
       spotsData += "<td>"+value.name+"</td>"
       spotsData += "<td>"+value.description+"</td>"
       spotsData += `<td> <a href = https://www.google.com/maps?q=${value.location[0]},${value.location[1]}>Map</a> </td>`
       spotsData += "</tr>"
   })
   $("table").append(spotsData)
})

});



