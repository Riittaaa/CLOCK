const deg = 6   
// This line declares a constant variable `deg` and assigns it a value of 6. This value is used to calculate the rotation degree for each hand of the clock.
    const hr = document.querySelector('#hr')
    //This line selects the HTML element with the id "hr" using the `querySelector()` method and assigns it to the variable `hr`. This element represents the hour hand of the clock.
    const mn = document.querySelector('#mn')
    const sc = document.querySelector('#sc')
    
    //This line starts a continuous interval that repeatedly executes the provided function. In this case, an anonymous arrow function is used.
    setInterval(() => {
        //This line creates a new `Date` object named `day` which represents the current date and time.
      const day = new Date()
      //This line retrieves the current hour from the `day` object using the `getHours()` method and multiplies it by 30 to calculate the rotation degree for the hour hand.
      let hh = day.getHours() * 30
      //Similarly, this line gets the current minutes and multiplies it by the `deg` value (6) to calculate the rotation degree for the minute hand.
      let mm = day.getMinutes() * deg
      let ss = day.getSeconds() * deg

      //This line applies a CSS transform to the hour hand element (`hr`) to rotate it based on the calculated rotation degree. It uses a template string to dynamically set the rotation value.
      hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
      mn.style.transform = `rotateZ(${mm}deg)`
      sc.style.transform = `rotateZ(${ss}deg)`
    })