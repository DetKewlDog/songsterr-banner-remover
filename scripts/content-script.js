const BannerId = 'Redesign_ATF_tab_page_728x90'

// Function to remove an element from the DOM
function removeElement(element) {
	if (!element || !element.parentNode) return;
	element.parentNode.removeChild(element);
}

// Function to find and remove the banner from the DOM
function removeBannerElement() {
	const element = document.querySelector(`#${BannerId}`);
	if (!element) return;
	removeElement(element);
}

// Create a MutationObserver to detect when new elements are added to the DOM
const observer = new MutationObserver(mutationsList => {
	for (const mutation of mutationsList) {
		if (mutation.type !== 'childList') continue;
		for (const addedNode of mutation.addedNodes) {
			if (!(addedNode instanceof HTMLElement)) continue;
			// Banner has been added to the DOM
			if (addedNode.id === BannerId) removeElement(addedNode);
			// Banner is nested inside a new DOM element
			else if (addedNode.querySelector(`#${BannerId}`)) removeBannerElement();
		}
	}
});

// Start observing changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });
// Start listening to page loads
window.onload = removeBannerElement;