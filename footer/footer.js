async function fetchFooter() {
    try {
        const response = await fetch("../footer/footer.html");
        const data = await response.text();
        document.querySelector("#replace_with_footer").innerHTML = data;
    } catch (error) {
        console.error("error:", error);
    }
}

fetchFooter();