{
    "hosting": {
        "public": "docs",
        "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
        "rewrites": [
        {
            "source": "**",
            "destination": "/404.html"
        }
        ]
    }
}
