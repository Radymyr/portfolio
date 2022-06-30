import './index.scss';

async function check() {
    await fetch('https://google.com');

}

check().then(() => {
    console.log("success");
}).catch(() => {
    console.log('error');
})