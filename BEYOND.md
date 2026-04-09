Above and Beyond Features

Implemented and linked confetti script (and centered confetti origin to game box)
<!-- Confetti script -->
    <script
            src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.9.1/tsparticles.confetti.bundle.min.js"></script>
    <script src="script.js" defer></script>
Function name (built in): confetti
This improves the game by giving an extra dopamine hit with the confetti when the player wins.

CSS Styling
modern and "rounded" visually appealling CSS styling that is visual appealling. The user experience is also improved, with color themes and gradients and button feedback.
Includes:
    gradients (like in body and button), customized font, padding, formatting
    body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, orange 0%, purple 100%);
    min-height: 100vh;
    align-items: center;
    padding: 20px;
    }

    div containers that make styling and organization easier
    .container {
    background: white;
    border-radius: 20px;
    padding: 30px;
    max-width: 600px;
    width: 100%;
    }

    custom button feedback
    button:active {
    transform: scale(0.95);
    }
    button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    }
