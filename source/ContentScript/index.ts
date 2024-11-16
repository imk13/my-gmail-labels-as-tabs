import {browser} from 'webextension-polyfill-ts';

console.log('helloworld from content script');
// Get all of the Gmail labels.

 const labels:String[] = [];
// Create a new Gmail tab for each label.
labels.forEach(label => {
  browser.tabs.create({url: `https://mail.google.com/mail/u/0/#label/${label}`, active: true});
});
export {};
