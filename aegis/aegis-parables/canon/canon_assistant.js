// THE AEGIS ARCHIVE ASSISTANT // CODENAME: INDEX
// Function: Recommend protocols based on emotional state.

const protocols = [
    {
        emotion: ["hopeless", "sad", "despair", "gave up"],
        title: "THE EARTHSEED PROTOCOL",
        file: "the-earthseed-protocol.html",
        quote: "The only lasting truth is Change."
    },
    {
        emotion: ["angry", "rage", "furious", "fight"],
        title: "THE VENDETTA PROTOCOL",
        file: "the-vendetta-protocol.html",
        quote: "Ideas are bulletproof."
    },
    {
        emotion: ["confused", "lost", "gaslit", "crazy"],
        title: "THE ORWELL PROTOCOL",
        file: "the-orwell-protocol.html",
        quote: "Sanity is not statistical."
    },
    {
        emotion: ["lonely", "alone", "isolated"],
        title: "THE PLATONIC PROTOCOL",
        file: "the-platonic-protocol.html",
        quote: "Partnership is thicker than blood."
    },
    {
        emotion: ["scared", "fear", "panic"],
        title: "THE DUNE PROTOCOL",
        file: "the-dune-protocol.html", // Placeholder if not yet created
        quote: "Fear is the mind-killer."
    },
    {
        emotion: ["bored", "stuck", "waiting"],
        title: "THE DANVILLE PROTOCOL",
        file: "the-danville-protocol.html",
        quote: "I know what we're going to do today."
    }
];

function queryIndex(input) {
    const lowerInput = input.toLowerCase();
    
    // Find matching protocol
    const match = protocols.find(p => p.emotion.some(e => lowerInput.includes(e)));
    
    if (match) {
        return `
            <div class="assistant-response">
                <strong>DETECTED STATE:</strong> ${lowerInput}<br>
                <strong>RECOMMENDED PROTOCOL:</strong> <a href="${match.file}">${match.title}</a><br>
                <em style="color:#ffd700;">"${match.quote}"</em>
            </div>
        `;
    } else {
        return `
            <div class="assistant-response">
                <strong>QUERY NOT RECOGNIZED.</strong><br>
                Try keywords: <em>Hopeless, Angry, Confused, Lonely.</em><br>
                Or access the <a href="archive-index.html">Full Index</a>.
            </div>
        `;
    }
}

// Attach to a simple input field in the HTML
// <input type="text" id="emotionalInput" placeholder="How are you feeling?" onchange="document.getElementById('assistantOutput').innerHTML = queryIndex(this.value)">
// <div id="assistantOutput"></div>