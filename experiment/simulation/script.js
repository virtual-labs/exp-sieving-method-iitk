let ptrdish = document.querySelector(".petridish")
let chm = document.querySelector("#chemical-in-spatulla")
let smple =document.querySelector("#sample-to-petridish")
let cap = document.querySelector("#powder-cap")
let spt = document.querySelector(".spatulla")

let Lang = document.querySelector("Language-selector")


let sieveset = document.querySelector(".Sieves")
let lid = document.querySelector(".Lid")
let Mbtn = document.querySelector(".shakerbtn")
let inst = document.querySelector("#text")
let lght = document.querySelector("#Shakerlight")
let tltsmple = document.querySelector(".tilted-samplepowder")



// Instructions Steps 




// --------------------------------------------step 1-----------------------------
 // Weight machine functionality ---------------------------------------------------------------------------------------------------
    const onButton = document.querySelector('#On-button');
    const tareButton = document.querySelector('#Tare-button');
    const display = document.querySelector('#display');
    let isOn = false;
    let currentWeight = 0;
    let sampleWeight = 0;
    let stabilizing = false;
    let stabilizeTimer = null;
    let blinkTimer = null;
    let currentStep = 0
    // Function to format weight with 2 decimal places
    function formatWeight(weight) {
        // Format to 2 decimal places
        return weight.toFixed(2);
    }

    // Function to display weight with optional fluctuation
    function displayWeight(useFluctuation = false) {
        if (!isOn || !stabilizing) return;

        if (useFluctuation) {
            // Random fluctuation around the target weight
            const fluctuation = (Math.random() - 0.5) * 0.05;
            const displayWeight = sampleWeight + fluctuation;
            display.value = formatWeight(displayWeight);

            // Continue stabilizing or finish
            const stabilizationTime = 2000 + Math.random() * 1000; // 2-3 seconds
            stabilizeTimer = setTimeout(() => {
                stabilizing = false;
                currentWeight = sampleWeight;
                display.value = formatWeight(currentWeight);
                // Blink to indicate stabilization complete
                blinkDisplay();
            }, stabilizationTime);
        } else {
            // Just display the exact weight from the slider
            currentWeight = sampleWeight;
            display.value = formatWeight(currentWeight);
        }
    }
inst.innerText = "Click on the weighing machine to turn on "
    // Function to blink the display to indicate stabilization
    function blinkDisplay() {
        let blinkCount = 0;
        const maxBlinks = 3;

        blinkTimer = setInterval(() => {
            if (blinkCount >= maxBlinks * 2) {
                clearInterval(blinkTimer);
                display.style.color = '';
                return;
            }

            display.style.color = blinkCount % 2 === 0 ? '#333' : '#00cc00';
            blinkCount++;
        }, 200);
    }

    // ON button functionality
    onButton.addEventListener('click', function() {
        isOn = !isOn;
        inst.innerText = "Weight machine is ON "

        if (isOn) {
            // Turn on the display
            onButton.textContent = 'OFF';
            onButton.style.backgroundColor = 'green';

            // Simple blinking effect with just 00.00
            let blinkCount = 0;
            let displayVisible = true;

            // Start with display on
            display.value = '00.00';

            // Create blinking effect
            const blinkTimer = setInterval(() => {
                displayVisible = !displayVisible;
                display.value = displayVisible ? '00.00' : '';

                blinkCount++;

                // Stop after 5 blinks (2.5 cycles)
                if (blinkCount >= 5) {
                    clearInterval(blinkTimer);
                    display.value = '00.00';
                    currentWeight = 0;

                    // Complete the first step if we're on it
                    // if (currentStep === 0) {
                    //     completeCurrentStep(); // Move to step 2
                    // }
                }
            }, 300); // Faster blink rate

        } else {
            // Turn off the display
            display.value = '';
            onButton.textContent = 'ON';
            onButton.style.backgroundColor = 'red';

            // Clear any ongoing timers
            if (stabilizeTimer) clearTimeout(stabilizeTimer);
            if (blinkTimer) clearInterval(blinkTimer);
            stabilizing = false;
        }
    });
    

    // Tare button functionality
    tareButton.addEventListener('click', function() {
        if (!isOn) return;

        // Visual feedback
        tareButton.style.backgroundColor = 'green';
        setTimeout(() => {
            tareButton.style.backgroundColor = 'green';
        }, 200);

        // Simulate taring process
        display.value = '----';

        setTimeout(() => {
            currentWeight = 0;
            display.value = formatWeight(currentWeight);
        }, 800);
    });

//  POSITIONING OF PETRIDISH TO THE WEIGHT SCALE 
// let ptrdishoriginalpos = true 

// ptrdish.addEventListener("click",function(){
//     if (isOn) {
//         // Simulate weighing process
//         display.value = '----';
        
//         // After a delay, show 200g
//         setTimeout(() => {
//             display.value = '10.00';
            
//             // // Complete step if we're on it
//             // if (currentStep === 1 || currentStep === 2) {
//             //     completeCurrentStep(); // Move to next step
//             // }
//         }, 3000);
//     } else {
//         alert("Please turn on the weight machine first!");
//     }

//     if(ptrdishoriginalpos){
//         ptrdish.style.transform = "translate(-205%,-90%)" 
//         ptrdishoriginalpos = false
//             inst.innerText = "Petridish placed to the weight machine "
//     }else{

//         ptrdish.addEventListener("click",function(){
//             ptrdish.style.left = "60%"
//             smple.style.opacity = 1
//             smple.style.left = "50%"
//              console.log ("Petridish return to original position ") 
//         })
//     }
// })
let ptrdishoriginalpos = true;
const originalLeft = ptrdish.style.left || "50%";   // Set correct original values here
const originalTop = ptrdish.style.top || "80%";     // Update based on your layout

ptrdish.addEventListener("click", function () {
    if (!isOn) {
        alert("Please turn on the weight machine first!");
        return;
    }

    if (ptrdishoriginalpos) {
        // Move to weight machine
        ptrdish.style.left = "22%";
        ptrdish.style.top = "78%";
        ptrdish.style.transform = "none"; // Cancel any transform effects

        display.value = '----';
        inst.innerText = "Petridish placed on the weight machine";

        setTimeout(() => {
            display.value = '10.00';
        }, 3000);

        ptrdishoriginalpos = false;
    } else {
        // Return to original position
        ptrdish.style.left = "40%"
        ptrdish.style.top = "87%"
        ptrdish.style.transform = "none";

        smple.style.opacity = 1;
        smple.style.left = "41%";
        smple.style.top = "88.5%"

        inst.innerText = "Petridish returned to original position";
        ptrdishoriginalpos = true;
    }
});


let sieveoriginalpos = false

sieveset.addEventListener("click",function(){
     if (isOn) {
                    // Simulate weighing process
                    display.value = '----';

                    // After a delay, show 200g
                    setTimeout(() => {
                        display.value = '200.00';
                        // if (currentStep === 3 || currentStep === 4) {
                        //     completeCurrentStep(); // Move to next step
                        // }
                    }, 2000);
                } else {
                    alert("Please turn on the weight machine first!");

                    }
                if(sieveoriginalpos=true){
                    sieveset.style.transform = " translate(-600%,50%)"
                    sieveoriginalpos = false
                     inst.innerText = "SieveSet placed to the weight machine "
                     setTimeout(function(){
                        ptrdish.addEventListener("click",function(){
                            ptrdish.style.top = "55%"
                             ptrdish.style.left = "16%"
                             smple.style.opacity = 1
                            smple.style.top = "54%"
                             smple.style.left = "18%"
                            
                             setTimeout(function(){
                                ptrdish.style.rotate = "45deg"
                                smple.style.rotate = "45deg"
                                setTimeout(function(){
                                    tltsmple.style.opacity = 1
                                    smple.style.opacity = 0
                                    setTimeout(function(){
                                        tltsmple.style.opacity = 0
                                        setTimeout(function(){
                                            ptrdish.style.rotate = "0deg"
                                            setTimeout(function(){
                                                ptrdish.style.left="40%"
                                                ptrdish.style.top = "87%"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1300)
                                  setTimeout(() => {
                                        display.value = '100.00';
                                    }, 3000);
                             },1500)
                       
                        })
                     },1000)
                }
                sieveset.addEventListener("click",function(){
                    sieveset.style.transform = " translate(0%,0%)"
                    sieveoriginalpos = true
                     inst.innerText = "SieveSet return to Sieve shaker machine "
                })
  
  })

  
// SPATULLA TAKE THE SAMPLE IN THE CHEMICAL POWDER TO THE WEIGHT MACHINE
spt.addEventListener("click",function(){
     if (!isOn) {
            alert('Please turn on the weight machine first!');
            return;
        }
        setTimeout(function(){
            inst.innerText = "Taking sample from the chemical powder using Spatulla to the petridish "
        },3000)
      spt.style.transform = "translate(130%,-1200%) rotate(-60deg)"
       setTimeout(function(){
        spt.style.transfrom = "translate(100%,-900%) rotate(-60deg)"
           setTimeout(function(){
        spt.style.top ="110%" 
        chm.style.opacity = 1
        setTimeout(function(){
            chm.style.top= "68%"
            spt.style.top = "94%"
            setTimeout(function(){
                chm.style.left= "25%"
                spt.style.left = "7%"
                setTimeout(function(){
                    chm.style.top = "80%"
                    setTimeout(function(){
                         inst.innerText = "Sample is put in the petridish "
                        chm.style.opacity = 0
                        smple.style.opacity = 1
                        if (isOn) {
                    // Simulate weighing process
                    inst.innerText = "Weighing the sample "
                    display.value = '----';

                    // After a delay, show 200g
                    setTimeout(() => {
                        display.value = '100.00';
                        inst.innerText = "Sample is 100GM "
                        // if (currentStep === 3 || currentStep === 4) {
                        //     completeCurrentStep(); // Move to next step
                        // }
                    }, 2000);
                } else {
                    alert("Please turn on the weight machine first!");

                    }
                    setTimeout(function(){
                        spt.style.top = "84%"
                        spt.style.left = "18%"
                        spt.style.rotate = "58deg"
                        inst.innerText = "Click on the Sieve to measure the weight of sieve set"
                    },1000)
                    },1200)
                       },1500)
                   },1000)
                 },1000)
           },1000)
       },1000)


})




//  REMOVING CAP FOR TAKING SAMPLE TO PETRIDISH BY SPATULLA


// let capos = false
cap.addEventListener("click",function(){
    //  if (!isOn) {
    //         alert('Please turn on the weight machine first!');
    //         return;
    //     }
     
        cap.style.transform = "translate(-10%,-150%)"
         inst.innerText = "Cap is removed"
            // cap.style.top = "70%"
            setTimeout(function(){
                cap.style.top = "93%"
                cap.style.left = "51%"
            },1000)
    
})




// MOVING LID TO THE SIEVEHSAKER MACHINE TO COVER THE MACHINE

lid.addEventListener("click",function(){
     if (!isOn) {
            alert('Please turn on the weight machine first!');
            return;
        }
    setTimeout(function(){
        lid.style.top = "48%"
        setTimeout(function(){
            lid.style.right = "19%"
             inst.innerText = "lid cover the Sieve Shaker machine "
        },1000)
    },1100)
    
})

// MACHINE BUTTON FUNCTIONALITY TO ON THE MACHINE

let flag = false
let counter = 0;
const maxShake = 100;
Mbtn.addEventListener("click",function(){
    if(flag=true){
        lght.style.backgroundColor = "red"
        const interval = setInterval(() =>{
        const offset = (counter % 2 == 0) ? 5: -5;
        mchn.style.transform = `translateX(${offset}px)`;
        sieveset.style.transform = `translateX(${offset}px)`;
        counter++;
        if (counter >= maxShake){
           clearInterval(interval);
           mchn.style.transform = "translateX(0)";
          //  sievset.style.transform = "translateX(0)";
        }
        },50)
        flag = false        
    }
})
