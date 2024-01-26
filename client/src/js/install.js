const butInstall = document.getElementById('buttonInstall');
let installPrompt = null;

console.log('Sanity Check');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // // event.preventDefault();
    // console.log(event);
    // butInstall.style.visibility = 'visible';
    // // installPrompt = event;
    // window.deferredPrompt = event;
    console.log('test');
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    console.log('installing', promptEvent);
    // if (!installPrompt)
    //     return;
    if (!promptEvent) {
        return;
    }
    const result = promptEvent.prompt();
    console.log(`Install was : ${result.outcome}`);
    butInstall.setAttribute('disabled', true);
    window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed!');
    window.deferredPrompt = null;
});
