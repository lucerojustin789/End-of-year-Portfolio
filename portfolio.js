console.log("Portfolio Loaded Successfully!");

function showAssignment(num) {
    const content = document.getElementById("content");

    if (num === 1) {
        content.innerHTML = `
            <h2>Assignment 1 - Soccer Jerseys Gallery</h2>

            <div class="gallery">

                <div class="card">
                    <img src="https://images.pexels.com/photos/19079587/pexels-photo-19079587.jpeg" alt="Argentina">
                    <p>Argentina 2022</p>
                </div>

                <div class="card">
                    <img src="https://images.pexels.com/photos/13756752/pexels-photo-13756752.jpeg" alt="Barcelona">
                    <p>Barcelona 2010</p>
                </div>

                <div class="card">
                    <img src="https://images.pexels.com/photos/23947836/pexels-photo-23947836.jpeg" alt="Morocco">
                    <p>Morocco 2022</p>
                </div>

                <div class="card">
                    <img src="https://images.pexels.com/photos/14656528/pexels-photo-14656528.jpeg" alt="Brazil">
                    <p>Brazil 2022</p>
                </div>

                <div class="card">
                    <img src="https://images.pexels.com/photos/15033213/pexels-photo-15033213.jpeg" alt="Liverpool">
                    <p>Liverpool 2022</p>
                </div>

                <div class="card">
                    <img src="https://images.pexels.com/photos/18256104/pexels-photo-18256104.jpeg" alt="Chelsea">
                    <p>Chelsea 2022</p>
                </div>

            </div>
        `;
    }

 
    }
