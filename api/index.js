const fetch = require("node-fetch");

module.exports = async function (context, req) {

    const message = req.body.text;

    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const key = process.env.AZURE_OPENAI_KEY;
    const deployment = process.env.AZURE_DEPLOYMENT;

    const response = await fetch(
        `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=2024-05-01-preview`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": key
            },
            body: JSON.stringify({
                messages: [
                    { role: "user", content: message }
                ]
            })
        }
    )

    const data = await response.json()

    context.res = {
        body: {
            response: data.choices[0].message.content
        }
    }

}