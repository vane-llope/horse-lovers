//show button in the middle of the page
window.addEventListener("scroll", function ()
{
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > window.innerHeight)
    {
        scrollToTopBtn.classList.remove("d-none");
    } else
    {
        scrollToTopBtn.classList.add("d-none");
    }
});
