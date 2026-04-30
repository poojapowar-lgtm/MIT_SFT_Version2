import React, { useState, useEffect } from "react";
import { MdAccessibility, MdClose } from "react-icons/md";
import { FaVolumeUp, FaPause, FaPlay } from "react-icons/fa";
import "./accessibility.css";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [colorBlind, setColorBlind] = useState("none");
  const [textToSpeech, setTextToSpeech] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", contrast);
  }, [contrast]);

  useEffect(() => {
    document.body.classList.toggle("big-cursor", bigCursor);
  }, [bigCursor]);

  useEffect(() => {
    document.body.classList.toggle("reading-guide", readingGuide);
  }, [readingGuide]);

  useEffect(() => {
    document.body.classList.toggle("no-animations", !animations);
  }, [animations]);

  useEffect(() => {
    document.body.className = document.body.className.replace(/colorblind-\w+/g, "");
    if (colorBlind !== "none") {
      document.body.classList.add(`colorblind-${colorBlind}`);
    }
  }, [colorBlind]);

  useEffect(() => {
    if (textToSpeech) {
      const handleClick = (e) => {
        const text = e.target.innerText || e.target.alt || e.target.ariaLabel;
        if (text && window.speechSynthesis) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    } else {
      window.speechSynthesis?.cancel();
    }
  }, [textToSpeech]);

  const resetAll = () => {
    setFontSize(100);
    setContrast(false);
    setBigCursor(false);
    setReadingGuide(false);
    setAnimations(true);
    setColorBlind("none");
    setTextToSpeech(false);
  };

  return (
    <>
      <button
        className="accessibility-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
      >
        <MdAccessibility />
      </button>

      {isOpen && (
        <div className="accessibility-modal" role="dialog" aria-label="Accessibility Settings">
          <div className="accessibility-header">
            <h3 className="innerpage-subtitle">Accessibility Options</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="close-modal-btn">
              <MdClose />
            </button>
          </div>

          <div className="accessibility-grid">
            {/* Text Size */}
            <div className="accessibility-card">
              <h3>Text Size</h3>
              <div className="font-controls">
                <button onClick={() => setFontSize(Math.max(80, fontSize - 10))} aria-label="Decrease text size">A-</button>
                <span>{fontSize}%</span>
                <button onClick={() => setFontSize(Math.min(150, fontSize + 10))} aria-label="Increase text size">A+</button>
              </div>
            </div>

            {/* Text to Speech */}
            <div className="accessibility-card">
              <h3><FaVolumeUp /> Audio & Screen Reader</h3>
              <button
                className={`toggle-btn ${textToSpeech ? "active" : ""}`}
                onClick={() => setTextToSpeech(!textToSpeech)}
                aria-pressed={textToSpeech}
              >
                {textToSpeech ? "ON" : "OFF"}
              </button>
              <p className="card-desc">Click any text to hear it</p>
            </div>

            {/* Big Cursor */}
            <div className="accessibility-card">
              <h3>Big Cursor</h3>
              <button
                className={`toggle-btn ${bigCursor ? "active" : ""}`}
                onClick={() => setBigCursor(!bigCursor)}
                aria-pressed={bigCursor}
              >
                {bigCursor ? "ON" : "OFF"}
              </button>
            </div>

            {/* Reading Guide */}
            <div className="accessibility-card">
              <h3>Reading Guide</h3>
              <button
                className={`toggle-btn ${readingGuide ? "active" : ""}`}
                onClick={() => setReadingGuide(!readingGuide)}
                aria-pressed={readingGuide}
              >
                {readingGuide ? "ON" : "OFF"}
              </button>
            </div>

            {/* Animations */}
            <div className="accessibility-card">
              <h3>{animations ? <FaPause /> : <FaPlay />} Animations</h3>
              <button
                className={`toggle-btn ${animations ? "active" : ""}`}
                onClick={() => setAnimations(!animations)}
                aria-pressed={animations}
              >
                {animations ? "Enabled" : "Paused"}
              </button>
            </div>

            {/* High Contrast */}
            <div className="accessibility-card">
              <h3>High Contrast</h3>
              <button
                className={`toggle-btn ${contrast ? "active" : ""}`}
                onClick={() => setContrast(!contrast)}
                aria-pressed={contrast}
              >
                {contrast ? "ON" : "OFF"}
              </button>
            </div>

            {/* Color Blind Mode */}
            <div className="accessibility-card full-width">
              <h3>Color Blind Mode</h3>
              <select 
                value={colorBlind} 
                onChange={(e) => setColorBlind(e.target.value)}
                aria-label="Select color blind mode"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (Red-Blind)</option>
                <option value="deuteranopia">Deuteranopia (Green-Blind)</option>
                <option value="tritanopia">Tritanopia (Blue-Blind)</option>
                <option value="monochrome">Monochrome</option>
              </select>
            </div>
          </div>

          <button className="reset-btn" onClick={resetAll}>
            Reset All Settings
          </button>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;
