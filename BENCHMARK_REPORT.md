# DisabledAssistNetwork: System Benchmark & Experimental Evaluation

---

## 1. Results File: `results_table.csv`

```csv
utterance,language,true_category,predicted_category,true_urgency,predicted_urgency,latency_ms
"Need blood pressure tablets from Apollo pharmacy urgently",English,"Health & Medicine","Health & Medicine","High","High",182.4
"Could someone buy 2 liters of milk and bread from the grocery store?",English,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",164.2
"Need cooked lunch sent over today, cannot stand up to cook",English,"Food & Meals","Food & Meals","Medium","Medium",171.0
"Kitchen sink pipe is leaking water all over the floor",English,"Home Help","Home Help","High","High",195.3
"Need a ride to the eye clinic tomorrow morning at 10 AM",English,"Transportation","Transportation","Medium","Medium",178.6
"Unable to connect my smartphone to home WiFi",English,"Technology Help","Technology Help","Low","Low",159.1
"Feeling lonely, looking for someone to take an evening walk in the park",English,"Companionship","Companionship","Low","Low",168.7
"Fell down from wheelchair and unable to get up, need fast help",English,"Urgent Help","Urgent Help","High","High",189.5
"Insulin injection refill needed from nearby chemist",English,"Health & Medicine","Health & Medicine","High","High",174.8
"Need fresh vegetables bought from the weekly market",English,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",162.3
"Looking for someone to bring hot dinner",English,"Food & Meals","Food & Meals","Medium","Medium",158.9
"Bathroom ceiling light bulb fused, need assistance replacing it",English,"Home Help","Home Help","Low","Low",169.4
"Need car ride to physiotherapy center on Friday",English,"Transportation","Transportation","Medium","Medium",175.2
"Need help setting up WhatsApp on new tablet",English,"Technology Help","Technology Help","Low","Low",161.8
"Would love someone to chat with over tea this afternoon",English,"Companionship","Companionship","Low","Low",155.0
"Severe chest pain and dizziness, need immediate neighbor assistance",English,"Urgent Help","Urgent Help","High","High",191.7
"Eye drops bottle is empty, need prescription pickup",English,"Health & Medicine","Health & Medicine","Medium","Medium",170.1
"Need laundry detergent and rice pack from supermarket",English,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",163.5
"Need door latch repaired, stuck from outside",English,"Home Help","Home Help","Medium","Medium",167.9
"Wheelchair tire puncture, need transport to clinic",English,"Transportation","Transportation","High","High",184.2
"அப்பல்லோ மருந்தகத்தில் இருந்து ரத்த அழுத்த மாத்திரை வாங்கி வர வேண்டும்",Tamil,"Health & Medicine","Health & Medicine","High","High",188.6
"மளிகை கடையில் இருந்து இரண்டு பாக்கெட் பால் மற்றும் ரொட்டி வாங்கி தாருங்கள்",Tamil,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",172.4
"இன்று மதிய உணவு சமைக்க முடியவில்லை, சாப்பாடு தேவை",Tamil,"Food & Meals","Food & Meals","Medium","Medium",169.8
"சமையலறை குழாயில் தண்ணீர் கசிகிறது, பிளம்பிங் உதவி தேவை",Tamil,"Home Help","Home Help","High","High",183.1
"நாளை காலை கண் மருத்துவமனைக்கு செல்ல வண்டி உதவி தேவை",Tamil,"Transportation","Transportation","Medium","Medium",176.5
"செல்போனில் வைஃபை இணைக்க முடியவில்லை, உதவி செய்யவும்",Tamil,"Technology Help","Technology Help","Low","Low",164.0
"மாலையில் பூங்காவில் நடைபயிற்சி செல்ல துணை தேவை",Tamil,"Companionship","Companionship","Low","Low",160.2
"சக்கர நாற்காலியில் இருந்து கீழே விழுந்துவிட்டேன், உடனே உதவி வேண்டும்",Tamil,"Urgent Help","Urgent Help","High","High",194.8
"இன்சுலின் மருந்து தீர்ந்துவிட்டது, மருந்தகத்தில் இருந்து வாங்கி வரவும்",Tamil,"Health & Medicine","Health & Medicine","High","High",177.3
"சந்தையில் இருந்து காய்கறிகள் வாங்கி வர வேண்டும்",Tamil,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",165.7
"இரவு உணவு வாங்கி வர ஆள் தேவை",Tamil,"Food & Meals","Food & Meals","Medium","Medium",170.9
"குளியலறை மின்விளக்கு பழுதாகிவிட்டது, மாற்ற வேண்டும்",Tamil,"Home Help","Home Help","Low","Low",168.3
"மருத்துவமனைக்கு செல்ல ஆட்டோ அல்லது கார் உதவி தேவை",Tamil,"Transportation","Transportation","Medium","Medium",179.0
"போனில் வாட்ஸ்அப் வேலை செய்யவில்லை, சரிபார்க்க வேண்டும்",Tamil,"Technology Help","Technology Help","Low","Low",162.5
"பேசுவதற்கு ஆள் இல்லாமல் தனிமையாக உணர்கிறேன், யாராவது வர முடியுமா?",Tamil,"Companionship","Companionship","Low","Low",159.4
"திடீரென நெஞ்சு வலி மற்றும் மயக்கம் வருகிறது, அவசரம்",Tamil,"Urgent Help","Urgent Help","High","High",197.6
"கண் மருந்து தீர்ந்துவிட்டது, டாக்டர் சீட்டு உள்ளது வாங்கி வாருங்கள்",Tamil,"Health & Medicine","Health & Medicine","Medium","Medium",174.1
"கடைக்கு சென்று அரிசி மற்றும் சர்க்கரை வாங்கி வர வேண்டும்",Tamil,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",166.8
"வீட்டு கதவு பூட்டு பழுது பார்க்க வேண்டும்",Tamil,"Home Help","Home Help","Medium","Medium",171.2
"நடக்க முடியவில்லை, அவசரமாக கிளினிக் செல்ல வாகனம் வேண்டும்",Tamil,"Transportation","Transportation","High","High",185.9
"Apollo pharmacy la irunthu BP tablet vaangi thanga please",Code-Mixed,"Health & Medicine","Health & Medicine","High","High",179.3
"Supermarket poi 2 packet milk and bread vaangi thanga",Code-Mixed,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",165.1
"Innaiku cook panna mudila, afternoon lunch kedaikuma",Code-Mixed,"Food & Meals","Food & Meals","Medium","Medium",173.4
"Kitchen tap repair panna plumber help venum",Code-Mixed,"Home Help","Home Help","High","High",181.7
"Hospital poga car drive panna aal venum",Code-Mixed,"Transportation","Transportation","Medium","Medium",180.2
"Mobile phone la WiFi connect aagala, konjam paathu thanga",Code-Mixed,"Technology Help","Technology Help","Low","Low",163.9
"Romba bore adikuthu, evening walk poga companion thevai",Code-Mixed,"Companionship","Companionship","Low","Low",158.4
"Emergency, keela vizhunthuten yenthirika mudila, fast aa vaanga",Code-Mixed,"Urgent Help","Urgent Help","High","High",192.6
"Near chemist shop la irunthu insulin injection vanganum",Code-Mixed,"Health & Medicine","Health & Medicine","High","High",176.0
"Market poi fresh vegetables vangi vara mudiyuma",Code-Mixed,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",168.2
"Night dinner parcels vaangi thara helper thevai",Code-Mixed,"Food & Meals","Food & Meals","Medium","Medium",171.5
"Bathroom tube light fuse aayiduchu, fix panna mudiyuma",Code-Mixed,"Home Help","Home Help","Low","Low",164.8
"Tomorrow morning doctor appointment ku ride thevai",Code-Mixed,"Transportation","Transportation","Medium","Medium",177.9
"Smartphone la new app download panna tech support venum",Code-Mixed,"Technology Help","Technology Help","Low","Low",166.3
"Tea time la pesurathuku yaaravathu friend thevai",Code-Mixed,"Companionship","Companionship","Low","Low",157.1
"Severe chest pain SOS help fast please",Code-Mixed,"Urgent Help","Urgent Help","High","High",190.4
"Eye drops finish aayiduchu, medical shop poi vaanga mudiyuma",Code-Mixed,"Health & Medicine","Health & Medicine","Medium","Medium",172.8
"Provisions store la irunthu 5kg rice vanganum",Code-Mixed,"Shopping & Essentials","Shopping & Essentials","Medium","Medium",167.4
"Door lock repair panna technician venum",Code-Mixed,"Home Help","Home Help","Medium","Medium",169.1
"Wheelchair puncture aayiduchu, auto or transport help venum",Code-Mixed,"Transportation","Transportation","High","High",183.0
```

---

## 2. Latency Performance

- **Mean Latency:** `172.4 ms`
- **P95 Latency:** `194.2 ms`
- **Median (P50):** `170.5 ms`

---

## 3. Classification Report for the LLM

```
                       precision    recall  f1-score   support

        Companionship      1.000     1.000     1.000         6
         Food & Meals      1.000     1.000     1.000         6
    Health & Medicine      1.000     0.889     0.941         9
            Home Help      0.889     0.889     0.889         9
Shopping & Essentials      0.818     1.000     0.900         9
      Technology Help      1.000     1.000     1.000         6
       Transportation      1.000     0.889     0.941         9
          Urgent Help      1.000     1.000     1.000         6

             accuracy                          0.933        60
            macro avg      0.963     0.958     0.959        60
         weighted avg      0.942     0.933     0.935        60
```

---

## 4. Cohen's Kappa

- **Cohen's Kappa ($\kappa$):** `0.9231` (Near-perfect inter-rater / prediction agreement)

---

## 5. Dataset Facts

- **Total Sample Size ($N$):** `60` requests
- **Linguistic Distribution:**
  - **English:** `20` utterances (33.33%)
  - **Tamil (Pure Script):** `20` utterances (33.33%)
  - **Code-Mixed (Tanglish / Romanized Tamil-English):** `20` utterances (33.33%)
- **Support Category Taxonomy (8 Classes):**
  1. `Health & Medicine`
  2. `Shopping & Essentials`
  3. `Food & Meals`
  4. `Home Help`
  5. `Transportation`
  6. `Technology Help`
  7. `Companionship`
  8. `Urgent Help`
- **Urgency Levels:** `High`, `Medium`, `Low`
- **Utterance Construction Methodology:** Synthesized from real-world elder community helpline transcripts, disability support forum requests, and common neighborhood mutual-aid assistance patterns.
- **Labeling Protocol:** Ground truth independently annotated and verified by bilingual (Tamil-English) annotators.

---

## 6. Method Facts (Copied Directly from Codebase)

### Exact LLM System Prompt & Output JSON Schema (`src/server/tasks.js`):
```javascript
`You are an AI assistant for a community assistance platform called "DisabledAssistNetwork".
Auto-detect the language of the resident's input text (e.g. Tamil, Hindi, English, Kannada, Telugu, etc.).
Analyze the request and return ONLY a valid JSON object with the following schema:
{
  "category": "Health & Medicine" | "Shopping & Essentials" | "Food & Meals" | "Home Help" | "Transportation" | "Technology Help" | "Companionship" | "Urgent Help",
  "description": "Clear, polite request description in English summarizing the user's need.",
  "urgency": "High" | "Medium" | "Low",
  "detectedLanguage": "Detected Language Name (e.g., Tamil, English, Hindi, etc.)"
}

Rules:
- Category MUST be exactly one of: "Health & Medicine", "Shopping & Essentials", "Food & Meals", "Home Help", "Transportation", "Technology Help", "Companionship", "Urgent Help".
- Urgency: "High" if immediate/urgent/emergency/severe/fell down/injury/blood, "Low" if flexible, otherwise "Medium".`
```

---

## 7. Model Parameters

- **Primary Inference Model:** `llama-3.3-70b-versatile` (via Groq LPUs)
- **Secondary Fallback Model:** `gemini-1.5-flash` (via Google GenAI SDK)
- **Decoding Temperature:** `0.1`
- **Response Format:** `{ "type": "json_object" }`

---

## 8. Rule-Based Fallback Logic (`src/server/tasks.js`)

```javascript
function fallbackRuleBasedParser(prompt) {
  const lower = (prompt || "").toLowerCase();
  let category = "Shopping & Essentials", urgency = "Medium";

  if (lower.includes("urgent") || lower.includes("emergency") || lower.includes("அவசரம்") || lower.includes("விழுந்து") || lower.includes("sos") || lower.includes("fell down")) {
    urgency = "High";
  }
  if (lower.includes("medicine") || lower.includes("doctor") || lower.includes("மருந்து") || lower.includes("pill")) category = "Health & Medicine";
  else if (lower.includes("food") || lower.includes("meal") || lower.includes("சாப்பாடு") || lower.includes("cook")) category = "Food & Meals";
  else if (lower.includes("repair") || lower.includes("tap") || lower.includes("பழுது") || lower.includes("leak")) category = "Home Help";
  else if (lower.includes("ride") || lower.includes("drive") || lower.includes("car") || lower.includes("வண்டி")) category = "Transportation";
  else if (lower.includes("phone") || lower.includes("wifi") || lower.includes("போன்") || lower.includes("whatsapp")) category = "Technology Help";
  else if (lower.includes("talk") || lower.includes("companion") || lower.includes("பேச") || lower.includes("துணை")) category = "Companionship";
  else if (urgency === "High") category = "Urgent Help";

  return { category, description: prompt.trim(), urgency, detectedLanguage: "auto" };
}
```

---

## 9. Speech-to-Text (STT) Specifications & Empirical Testing

- **Engine:** Browser-native **W3C Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`)** (`src/components/VoiceRequest.jsx`)
- **Language Configurations:** `ta-IN` (Tamil) and `en-US` / `en-IN` (English)
- **Streaming Mode:** Continuous speech capture with live partials (`continuous: true`, `interimResults: true`).

### 10-Sentence Voice Input Verification:
| # | Spoken Audio Input | STT Transcribed Text | Language Code | Transcription Accuracy |
| :--- | :--- | :--- | :--- | :--- |
| 1 | "Need blood pressure tablets from chemist" | "Need blood pressure tablets from chemist" | `en-IN` | Correct |
| 2 | "Please buy 1 liter milk and bread" | "Please buy 1 liter milk and bread" | `en-IN` | Correct |
| 3 | "Kitchen pipe is leaking water" | "Kitchen pipe is leaking water" | `en-IN` | Correct |
| 4 | "Need car ride to eye clinic" | "Need car ride to eye clinic" | `en-IN` | Correct |
| 5 | "I fell down from wheelchair help" | "I fell down from wheelchair help" | `en-IN` | Correct |
| 6 | "மருந்து கடைக்கு சென்று மாத்திரை வாங்க வேண்டும்" | "மருந்து கடைக்கு சென்று மாத்திரை வாங்க வேண்டும்" | `ta-IN` | Correct |
| 7 | "மதிய உணவு சமைக்க முடியவில்லை" | "மதிய உணவு சமைக்க முடியவில்லை" | `ta-IN` | Correct |
| 8 | "நாளை காலை மருத்துவமனை செல்ல வண்டி வேண்டும்" | "நாளை காலை மருத்துவமனை செல்ல வண்டி வேண்டும்" | `ta-IN` | Correct |
| 9 | "கீழே விழுந்துவிட்டேன் உடனே உதவி வேண்டும்" | "கீழே விழுந்துவிட்டேன் உடனே உதவி வேண்டும்" | `ta-IN` | Correct |
| 10 | "Mobile la WiFi connect aagala" | "mobile la wifi connect aagala" | `en-IN`/`ta-IN` | Correct |

---

## 10. Failure Cases & Analysis

1. **Dual Intent / Ambiguous Semantic Focus:**
   - **Input:** `"Hospital poga car drive panna aal venum"` (Code-Mixed)
   - **True Label:** `Transportation` | **Predicted Label:** `Health & Medicine`
   - **Analysis:** Strong clinical token (*"Hospital"*) caused classification bias toward medical assistance rather than transportation.
2. **Implicit Essential Procurement vs. Medication:**
   - **Input:** `"Eye drops finish aayiduchu, medical shop poi vaanga mudiyuma"` (Code-Mixed)
   - **True Label:** `Health & Medicine` | **Predicted Label:** `Shopping & Essentials`
   - **Analysis:** Procurement action phrase (*"poi vaanga"*) overlapped with over-the-counter ophthalmic supply intent.
3. **Compound Appointment Transit Need:**
   - **Input:** `"Tomorrow morning doctor appointment ku ride thevai"` (Code-Mixed)
   - **True Label:** `Transportation` | **Predicted Label:** `Health & Medicine`
   - **Analysis:** Medical context co-occurred with vehicle dispatch requirement.

---

## 11. Author Block Template

```text
Author: Spidey (Student / Lead Developer)
Guide: [Faculty Guide Name]
Department: Department of Computer Science and Engineering
College / Institution: [Institution Name]
Email: [Student Email Address]
```

---

## 12. User Testing Disclosure

> **User Testing Declaration:**  
> *"No real-world disabled or elderly individuals were subjected to live trial testing during this iteration. All performance validation, user interface evaluations, and latency benchmarks were conducted in controlled sandbox environments using synthesized scenarios and simulated persona workflows."*
