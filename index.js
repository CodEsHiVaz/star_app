const umbrella_img = document.querySelector(".umbrelaImage");
const imageInput = document.querySelector('#imageUpload');

imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', function () {

        document.querySelector('.logo').style.backgroundImage = `url(${reader.result})`;
    });
    reader.readAsDataURL(imageInput.files[0]);
});



function chosecolor(e) {
    let allcolors = document.querySelectorAll(".color-selection div")

    for (let i = 0; i < allcolors.length; i++) {

        allcolors[i].classList.remove("selected-color");
    }
    umbrella_img.src = "./loader_icon.svg"
    umbrella_img.classList.add("loder-animation")

    document.querySelector('.logo').style.display = 'none';



    setTimeout(() => {
        document.querySelector('.logo').style.display = 'block';
        let targeted_color = e.target.id
        if (targeted_color == "yellow") {
            umbrella_img.classList.remove("loder-animation")
            umbrella_img.src = "./Yello umbrella.png"
            e.target.classList.add("selected-color");
        }
        else if (targeted_color == "blue") {
            umbrella_img.classList.remove("loder-animation")
            umbrella_img.src = "/Blue umbrella.png"
            e.target.classList.add("selected-color");
        } else if (targeted_color == "pink") {
            umbrella_img.classList.remove("loder-animation")
            umbrella_img.src = "./Pink umbrella.png"
            e.target.classList.add("selected-color");
        }
    }, 1000)


}