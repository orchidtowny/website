export default function openLink(link, newTab = true) {
    console.log(`Opening link ${link}`)
    window.open(link, (newTab) ? '_blank' : '');
}