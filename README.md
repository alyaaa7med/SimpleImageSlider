# Interactive Image Slider 🖼️

A JavaScript implementation of a dual-mode image slider. This project demonstrates advanced DOM manipulation, state management to prevent logic conflicts.

---

## 📷 Visual Preview

![Slider Preview](JS4/Screenshot%20(221).png)
![Slider Preview](JS4/Screenshot%20(222).png)


## ✨ Features

* **Manual Control:** Precise navigation through a 6-image gallery using **Next** and **Previous** controls with built-in boundary looping (jumps from image 6 back to 1 and vice versa).
* **Automated Slideshow:** A specialized mode that triggers a 2-second cycling interval.
* **Dynamic Styling:** The application intelligently toggles between `.images` (standard thumbnail view) and `.slides` (expanded viewing mode) CSS classes based on the active state.
* **State Protection:** Logic is implemented to disable manual button overrides (`slide_mode` check) while the automated slideshow is running, ensuring the timing intervals remain synchronized.


## 🛠️ Technologies Used

* **HTML:** Semantic structure for media containers and interactive forms.
* **CSS:** Custom layout management using specific ID/Class hierarchies and smooth transitions.
* **Vanilla JavaScript (ES6+):**
    * **Asynchronous Logic:** Utilizing `setInterval` and `setTimeout` for timing-sensitive transitions.
    * **State Management:** Tracking current indices and active modes via boolean flags.
    * **Event Handling:** Implementing `click`, `change`, and `load` listeners for a responsive UI.

