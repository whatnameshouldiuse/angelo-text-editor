const butInstall = document.getElementById('buttonInstall');
let installPrompt = null;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    installPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!installPrompt)
        return;
    const result = await installPrompt.prompt();
    console.log(`Install was : ${result.outcome}`);
    butInstall.setAttribute('disabled', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed!');
});
