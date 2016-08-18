// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .


function clipboard(ID_value){
  document.getElementById(ID_value).addEventListener("click", function() {
      copyToClipboardMsg(document.getElementById(ID_value), "msg");
  });

  document.getElementById("copyButton2").addEventListener("click", function() {
      copyToClipboardMsg(document.getElementById("copyTarget2"), "msg");
  });

  document.getElementById("pasteTarget").addEventListener("mousedown", function() {
      this.value = "";
  });


  function copyToClipboardMsg(elem, msgElem) {
      var succeed = copyToClipboard(elem);
      var msg;
      if (!succeed) {
          msg = "Copy not supported or blocked.  Press Ctrl+c to copy."
      } else {
          msg = "Text copied to the clipboard."
      }
      if (typeof msgElem === "string") {
          msgElem = document.getElementById(msgElem);
      }
      msgElem.innerHTML = msg;
      setTimeout(function() {
          msgElem.innerHTML = "";
      }, 2000);
  }

  function copyToClipboard(elem) {
      // create hidden text element, if it doesn't already exist
      var targetId = "_hiddenCopyText_";
      var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
      var origSelectionStart, origSelectionEnd;
      if (isInput) {
          // can just use the original source element for the selection and copy
          target = elem;
          origSelectionStart = elem.selectionStart;
          origSelectionEnd = elem.selectionEnd;
      } else {
          // must use a temporary form element for the selection and copy
          target = document.getElementById(targetId);
          if (!target) {
              var target = document.createElement("textarea");
              target.style.position = "absolute";
              target.style.left = "-9999px";
              target.style.top = "0";
              target.id = targetId;
              document.body.appendChild(target);
          }
          target.textContent = elem.textContent;
      }
      // select the content
      var currentFocus = document.activeElement;
      target.focus();
      target.setSelectionRange(0, target.value.length);
      
      // copy the selection
      var succeed;
      try {
          succeed = document.execCommand("copy");
      } catch(e) {
          succeed = false;
      }
      // restore original focus
      if (currentFocus && typeof currentFocus.focus === "function") {
          currentFocus.focus();
      }
      
      if (isInput) {
          // restore prior selection
          elem.setSelectionRange(origSelectionStart, origSelectionEnd);
      } else {
          // clear temporary content
          target.textContent = "";
      }
      return succeed;
  }
}

