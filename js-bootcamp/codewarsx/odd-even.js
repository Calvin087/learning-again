function oddOrEven(array) {
    let newArray = 0
    for (let i = 0; i < array.length; i++) {
        newArray += array[i]
    } if (newArray % 2 === 0) {
        return "even"
    } else {
        return 'odd'
    }
 }

 console.log(oddOrEven([2, 2, 5]))

//  function oddOrEven(array) {
//     var result = 0;
//     for (var i = 0; i < array.length; i++)
//     {result+=array[i];}
//     if (result%2 == 0)
//     {return "even";}
//     else{return "odd";}
//   }