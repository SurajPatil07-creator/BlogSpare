// ================= DARK MODE =================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.innerHTML = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        darkModeBtn.innerHTML = "🌙";

        localStorage.setItem("darkMode", "disabled");
    }

});


// Remember dark mode

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark");

    darkModeBtn.innerHTML = "☀️";
}


// ================= SEARCH BLOGS =================

const searchInput =
    document.getElementById("searchInput");

const blogCards =
    document.querySelectorAll(".blog-card");

const noResults =
    document.getElementById("noResults");

const blogCount =
    document.getElementById("blogCount");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase();

    let visibleBlogs = 0;

    blogCards.forEach(function (card) {

        const title =
            card.dataset.title.toLowerCase();

        const content =
            card.innerText.toLowerCase();

        if (
            title.includes(searchText) ||
            content.includes(searchText)
        ) {

            card.style.display = "block";

            visibleBlogs++;

        } else {

            card.style.display = "none";
        }

    });


    blogCount.innerText =
        visibleBlogs + " Blogs";


    if (visibleBlogs === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";
    }

});


// ================= CATEGORY FILTER =================

const categoryButtons =
    document.querySelectorAll(".category");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        categoryButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const selectedCategory =
            button.dataset.category;

        let visibleBlogs = 0;


        blogCards.forEach(function (card) {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.style.display = "block";

                visibleBlogs++;

            } else {

                card.style.display = "none";
            }

        });


        blogCount.innerText =
            visibleBlogs + " Blogs";


        if (visibleBlogs === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";
        }

    });

});


// ================= LIKE BUTTON =================

function likeBlog(button) {

    button.classList.toggle("liked");


    if (button.classList.contains("liked")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";
    }

}


// ================= READ MORE MODAL =================

function openBlog(title, text) {

    document.getElementById("modalTitle")
        .innerText = title;

    document.getElementById("modalText")
        .innerText = text;

    document.getElementById("blogModal")
        .style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeBlog() {

    document.getElementById("blogModal")
        .style.display = "none";

    document.body.style.overflow = "auto";
}


// Close modal when clicking outside

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("blogModal");

    if (event.target === modal) {

        closeBlog();
    }

});


// ================= CURRENT YEAR =================

document.getElementById("year")
    .innerText = new Date().getFullYear();


// ================= SCROLL TO TOP =================

const scrollTopBtn =
    document.getElementById("scrollTopBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";
    }

});


scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});