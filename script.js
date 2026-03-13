async function send() {

    let text = document.getElementById("msg").value

    let res = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })

    let data = await res.json()

    document.getElementById("chat").innerHTML +=
        "<p><b>Tú:</b> " + text + "</p>"

    document.getElementById("chat").innerHTML +=
        "<p><b>IA:</b> " + data.response + "</p>"

}