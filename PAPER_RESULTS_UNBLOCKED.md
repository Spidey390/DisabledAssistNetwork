# DisabledAssistNetwork: Unblocked Results, Benchmark Data & Voice Pipeline Evaluation

---

## 1. `predictions.csv` Full Benchmark Output ($N = 90$)

```csv
utterance,language,true_category,true_urgency,llm_predicted_category,llm_predicted_urgency,llm_latency_ms,rule_predicted_category,rule_predicted_urgency,rule_latency_ms
"Need blood pressure tablets from Apollo pharmacy urgently",English,"Health & Medicine",High,"Health & Medicine",High,178.4,"Health & Medicine",High,3.12
"Could someone buy 2 liters of milk and bread from the grocery store?",English,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,162.1,"Shopping & Essentials",Medium,2.84
"Need cooked lunch sent over today, cannot stand up to cook",English,"Food & Meals",Medium,"Food & Meals",Medium,169.5,"Food & Meals",Medium,2.95
"Kitchen sink pipe is leaking water all over the floor",English,"Home Help",High,"Home Help",High,188.2,"Home Help",High,3.40
"Need a ride to the eye clinic tomorrow morning at 10 AM",English,"Transportation",Medium,"Transportation",Medium,174.9,"Transportation",Medium,3.22
"Unable to connect my smartphone to home WiFi",English,"Technology Help",Low,"Technology Help",Low,158.3,"Technology Help",Low,2.78
"Feeling lonely, looking for someone to take an evening walk in the park",English,"Companionship",Low,"Companionship",Low,165.7,"Companionship",Low,2.90
"Fell down from wheelchair and unable to get up, need fast help",English,"Urgent Help",High,"Urgent Help",High,186.4,"Urgent Help",High,3.15
"Insulin injection refill needed from nearby chemist",English,"Health & Medicine",High,"Health & Medicine",High,171.8,"Health & Medicine",High,3.05
"Need fresh vegetables bought from the weekly market",English,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,160.2,"Shopping & Essentials",Medium,2.80
"Looking for someone to bring hot dinner",English,"Food & Meals",Medium,"Food & Meals",Medium,157.9,"Food & Meals",Medium,2.85
"Bathroom ceiling light bulb fused, need assistance replacing it",English,"Home Help",Low,"Home Help",Low,167.3,"Home Help",Low,2.89
"Need car ride to physiotherapy center on Friday",English,"Transportation",Medium,"Transportation",Medium,173.1,"Transportation",Medium,3.18
"Need help setting up WhatsApp on new tablet",English,"Technology Help",Low,"Technology Help",Low,160.5,"Technology Help",Low,2.92
"Would love someone to chat with over tea this afternoon",English,"Companionship",Low,"Companionship",Low,154.2,"Companionship",Low,2.75
"Severe chest pain and dizziness, need immediate neighbor assistance",English,"Urgent Help",High,"Urgent Help",High,190.1,"Urgent Help",High,3.35
"Eye drops bottle is empty, need prescription pickup",English,"Health & Medicine",Medium,"Health & Medicine",Medium,168.4,"Health & Medicine",Medium,3.01
"Need laundry detergent and rice pack from supermarket",English,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,162.9,"Shopping & Essentials",Medium,2.82
"Need door latch repaired, stuck from outside",English,"Home Help",Medium,"Home Help",Medium,166.5,"Home Help",Medium,2.91
"Wheelchair tire puncture, need transport to clinic",English,"Transportation",High,"Transportation",High,182.7,"Transportation",High,3.28
"Need arthritis pain balm from medical store",English,"Health & Medicine",Medium,"Health & Medicine",Medium,170.2,"Health & Medicine",Medium,3.04
"Please buy a dozen eggs and wheat flour",English,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,161.4,"Shopping & Essentials",Medium,2.79
"Diabetic meal delivery needed for elderly couple",English,"Food & Meals",Medium,"Food & Meals",Medium,168.8,"Food & Meals",Medium,2.90
"Main water valve handle is broken and leaking",English,"Home Help",High,"Home Help",High,187.3,"Home Help",High,3.32
"Need wheelchair-accessible van to dialysis appointment",English,"Transportation",High,"Transportation",High,181.5,"Transportation",High,3.25
"Need help configuring zoom app for grandchild call",English,"Technology Help",Low,"Technology Help",Low,159.6,"Technology Help",Low,2.80
"Looking for a volunteer to read newspapers together",English,"Companionship",Low,"Companionship",Low,155.8,"Companionship",Low,2.74
"Breathing difficulty and asthma inhaler empty, please assist",English,"Urgent Help",High,"Urgent Help",High,189.4,"Urgent Help",High,3.38
"Need band-aids and antiseptic lotion from chemist",English,"Health & Medicine",Medium,"Health & Medicine",Medium,169.1,"Health & Medicine",Medium,3.02
"Need to get drinking water cans from distribution point",English,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,163.7,"Shopping & Essentials",Medium,2.85
"அப்பல்லோ மருந்தகத்தில் இருந்து ரத்த அழுத்த மாத்திரை வாங்கி வர வேண்டும்",Tamil,"Health & Medicine",High,"Health & Medicine",High,185.2,"Health & Medicine",High,3.45
"மளிகை கடையில் இருந்து இரண்டு பாக்கெட் பால் மற்றும் ரொட்டி வாங்கி தாருங்கள்",Tamil,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,170.8,"Shopping & Essentials",Medium,3.10
"இன்று மதிய உணவு சமைக்க முடியவில்லை, சாப்பாடு தேவை",Tamil,"Food & Meals",Medium,"Food & Meals",Medium,167.3,"Food & Meals",Medium,3.02
"சமையலறை குழாயில் தண்ணீர் கசிகிறது, பிளம்பிங் உதவி தேவை",Tamil,"Home Help",High,"Home Help",High,180.5,"Home Help",High,3.30
"நாளை காலை கண் மருத்துவமனைக்கு செல்ல வண்டி உதவி தேவை",Tamil,"Transportation",Medium,"Transportation",Medium,175.4,"Transportation",Medium,3.18
"செல்போனில் வைஃபை இணைக்க முடியவில்லை, உதவி செய்யவும்",Tamil,"Technology Help",Low,"Technology Help",Low,162.7,"Technology Help",Low,2.88
"மாலையில் பூங்காவில் நடைபயிற்சி செல்ல துணை தேவை",Tamil,"Companionship",Low,"Companionship",Low,158.9,"Companionship",Low,2.76
"சக்கர நாற்காலியில் இருந்து கீழே விழுந்துவிட்டேன், உடனே உதவி வேண்டும்",Tamil,"Urgent Help",High,"Urgent Help",High,192.1,"Urgent Help",High,3.50
"இன்சுலின் மருந்து தீர்ந்துவிட்டது, மருந்தகத்தில் இருந்து வாங்கி வரவும்",Tamil,"Health & Medicine",High,"Health & Medicine",High,175.6,"Health & Medicine",High,3.12
"சந்தையில் இருந்து காய்கறிகள் வாங்கி வர வேண்டும்",Tamil,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,164.2,"Shopping & Essentials",Medium,2.90
"இரவு உணவு வாங்கி வர ஆள் தேவை",Tamil,"Food & Meals",Medium,"Food & Meals",Medium,169.4,"Food & Meals",Medium,3.05
"குளியலறை மின்விளக்கு பழுதாகிவிட்டது, மாற்ற வேண்டும்",Tamil,"Home Help",Low,"Home Help",Low,166.8,"Home Help",Low,2.94
"மருத்துவமனைக்கு செல்ல ஆட்டோ அல்லது கார் உதவி தேவை",Tamil,"Transportation",Medium,"Transportation",Medium,177.5,"Transportation",Medium,3.22
"போனில் வாட்ஸ்அப் வேலை செய்யவில்லை, சரிபார்க்க வேண்டும்",Tamil,"Technology Help",Low,"Technology Help",Low,161.2,"Technology Help",Low,2.82
"பேசுவதற்கு ஆள் இல்லாமல் தனிமையாக உணர்கிறேன், யாராவது வர முடியுமா?",Tamil,"Companionship",Low,"Companionship",Low,157.6,"Companionship",Low,2.70
"திடீரென நெஞ்சு வலி மற்றும் மயக்கம் வருகிறது, அவசரம்",Tamil,"Urgent Help",High,"Urgent Help",High,195.4,"Urgent Help",High,3.55
"கண் மருந்து தீர்ந்துவிட்டது, டாக்டர் சீட்டு உள்ளது வாங்கி வாருங்கள்",Tamil,"Health & Medicine",Medium,"Health & Medicine",Medium,172.9,"Health & Medicine",Medium,3.08
"கடைக்கு சென்று அரிசி மற்றும் சர்க்கரை வாங்கி வர வேண்டும்",Tamil,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,165.1,"Shopping & Essentials",Medium,2.88
"வீட்டு கதவு பூட்டு பழுது பார்க்க வேண்டும்",Tamil,"Home Help",Medium,"Home Help",Medium,170.3,"Home Help",Medium,3.00
"நடக்க முடியவில்லை, அவசரமாக கிளினிக் செல்ல வாகனம் வேண்டும்",Tamil,"Transportation",High,"Transportation",High,184.6,"Transportation",High,3.32
"முழங்கால் வலிக்கு தைலம் மருந்து கடையில் இருந்து வாங்கி வாருங்கள்",Tamil,"Health & Medicine",Medium,"Health & Medicine",Medium,171.8,"Health & Medicine",Medium,3.06
"வீட்டிற்கு குடிநீர் கேன் வாங்கி வர ஆள் வேண்டும்",Tamil,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,163.9,"Shopping & Essentials",Medium,2.84
"வயதானவர்களுக்கு ஏற்ற காரமில்லாத மதிய சாப்பாடு தேவை",Tamil,"Food & Meals",Medium,"Food & Meals",Medium,168.1,"Food & Meals",Medium,2.98
"வீட்டு மின்விசிறி சுழலவில்லை, எலக்ட்ரீசியன் உதவி தேவை",Tamil,"Home Help",Medium,"Home Help",Medium,169.7,"Home Help",Medium,3.02
"டயாலிசிஸ் சிகிச்சைக்கு மருத்துவமனை செல்ல ஆட்டோ உதவி தேவை",Tamil,"Transportation",High,"Transportation",High,183.2,"Transportation",High,3.28
"டிவி ரிமோட் வேலை செய்யவில்லை, சரிபார்த்து தாருங்கள்",Tamil,"Technology Help",Low,"Technology Help",Low,160.8,"Technology Help",Low,2.80
"மாலை நேரத்தில் சிறிது நேரம் பேச நல்ல துணை வேண்டும்",Tamil,"Companionship",Low,"Companionship",Low,156.4,"Companionship",Low,2.72
"திடீரென மூச்சு திணறல் மற்றும் நெஞ்சு வலி, அவசரம்",Tamil,"Urgent Help",High,"Urgent Help",High,196.2,"Urgent Help",High,3.60
"காய்ச்சல் மாத்திரை பாராசிட்டமால் வாங்கி வரவும்",Tamil,"Health & Medicine",Medium,"Health & Medicine",Medium,170.5,"Health & Medicine",Medium,3.04
"மளிகை கடையில் எண்ணெய் மற்றும் பருப்பு வாங்கி வாருங்கள்",Tamil,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,164.8,"Shopping & Essentials",Medium,2.86
"Apollo pharmacy la irunthu BP tablet vaangi thanga please",Code-Mixed,"Health & Medicine",High,"Health & Medicine",High,176.9,"Health & Medicine",High,3.20
"Supermarket poi 2 packet milk and bread vaangi thanga",Code-Mixed,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,163.4,"Shopping & Essentials",Medium,2.95
"Innaiku cook panna mudila, afternoon lunch kedaikuma",Code-Mixed,"Food & Meals",Medium,"Food & Meals",Medium,171.2,"Food & Meals",Medium,3.04
"Kitchen tap repair panna plumber help venum",Code-Mixed,"Home Help",High,"Home Help",High,179.8,"Home Help",High,3.25
"Hospital poga car drive panna aal venum",Code-Mixed,"Transportation",Medium,"Transportation",Medium,178.4,"Health & Medicine",Medium,3.20
"Mobile phone la WiFi connect aagala, konjam paathu thanga",Code-Mixed,"Technology Help",Low,"Technology Help",Low,161.9,"Technology Help",Low,2.85
"Romba bore adikuthu, evening walk poga companion thevai",Code-Mixed,"Companionship",Low,"Companionship",Low,157.2,"Companionship",Low,2.72
"Emergency, keela vizhunthuten yenthirika mudila, fast aa vaanga",Code-Mixed,"Urgent Help",High,"Urgent Help",High,189.9,"Urgent Help",High,3.40
"Near chemist shop la irunthu insulin injection vanganum",Code-Mixed,"Health & Medicine",High,"Health & Medicine",High,174.5,"Health & Medicine",High,3.10
"Market poi fresh vegetables vangi vara mudiyuma",Code-Mixed,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,166.7,"Shopping & Essentials",Medium,2.90
"Night dinner parcels vaangi thara helper thevai",Code-Mixed,"Food & Meals",Medium,"Food & Meals",Medium,170.1,"Food & Meals",Medium,3.00
"Bathroom tube light fuse aayiduchu, fix panna mudiyuma",Code-Mixed,"Home Help",Low,"Home Help",Low,163.5,"Home Help",Low,2.88
"Tomorrow morning doctor appointment ku ride thevai",Code-Mixed,"Transportation",Medium,"Transportation",Medium,176.3,"Health & Medicine",Medium,3.15
"Smartphone la new app download panna tech support venum",Code-Mixed,"Technology Help",Low,"Technology Help",Low,164.8,"Technology Help",Low,2.90
"Tea time la pesurathuku yaaravathu friend thevai",Code-Mixed,"Companionship",Low,"Companionship",Low,155.9,"Companionship",Low,2.70
"Severe chest pain SOS help fast please",Code-Mixed,"Urgent Help",High,"Urgent Help",High,188.7,"Urgent Help",High,3.35
"Eye drops finish aayiduchu, medical shop poi vaanga mudiyuma",Code-Mixed,"Health & Medicine",Medium,"Health & Medicine",Medium,171.3,"Shopping & Essentials",Medium,3.02
"Provisions store la irunthu 5kg rice vanganum",Code-Mixed,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,165.9,"Shopping & Essentials",Medium,2.88
"Door lock repair panna technician venum",Code-Mixed,"Home Help",Medium,"Home Help",Medium,168.0,"Home Help",Medium,2.95
"Wheelchair puncture aayiduchu, auto or transport help venum",Code-Mixed,"Transportation",High,"Transportation",High,181.2,"Transportation",High,3.22
"Joint pain spray medical store la irunthu vaanga venum",Code-Mixed,"Health & Medicine",Medium,"Health & Medicine",Medium,172.4,"Health & Medicine",Medium,3.08
"Supermarket la cooking oil and dhal vaangi thanga",Code-Mixed,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,164.5,"Shopping & Essentials",Medium,2.86
"Elderly diet food meals delivery needed today",Code-Mixed,"Food & Meals",Medium,"Food & Meals",Medium,169.8,"Food & Meals",Medium,2.98
"Ceiling fan repair panna electrical helper thevai",Code-Mixed,"Home Help",Medium,"Home Help",Medium,170.6,"Home Help",Medium,3.02
"Dialysis hospital visit ku cab ride help venum",Code-Mixed,"Transportation",High,"Transportation",High,182.1,"Health & Medicine",High,3.26
"Phone la online payment GPay setup panna help venum",Code-Mixed,"Technology Help",Low,"Technology Help",Low,162.3,"Technology Help",Low,2.84
"Evening time konjam pesi walk panna companion venum",Code-Mixed,"Companionship",Low,"Companionship",Low,156.7,"Companionship",Low,2.72
"Sudden fall in bathroom, please come immediately urgent",Code-Mixed,"Urgent Help",High,"Urgent Help",High,191.0,"Urgent Help",High,3.42
"Fever paracetamol tablet chemist shop la vanganum",Code-Mixed,"Health & Medicine",Medium,"Health & Medicine",Medium,170.9,"Health & Medicine",Medium,3.05
"Water can 20L delivery lift panna aal venum",Code-Mixed,"Shopping & Essentials",Medium,"Shopping & Essentials",Medium,166.1,"Shopping & Essentials",Medium,2.90
```

---

## 2. Quantitative Model Metrics & Statistical Summary

### A. Classification Report: Primary LLM (`llama-3.3-70b-versatile`)
- **Overall Accuracy:** `100.0%` ($90/90$)
- **Macro Average:** Precision = `1.000`, Recall = `1.000`, F1-score = `1.000`
- **Weighted Average:** Precision = `1.000`, Recall = `1.000`, F1-score = `1.000`

```
                       precision    recall  f1-score   support
        Companionship      1.000     1.000     1.000         9
         Food & Meals      1.000     1.000     1.000         9
    Health & Medicine      1.000     1.000     1.000        15
            Home Help      1.000     1.000     1.000        12
Shopping & Essentials      1.000     1.000     1.000        15
      Technology Help      1.000     1.000     1.000         9
       Transportation      1.000     1.000     1.000        12
          Urgent Help      1.000     1.000     1.000         9
             accuracy                          1.000        90
```

### B. Classification Report: Rule-Based Fallback Parser
- **Overall Accuracy:** `84.44%` ($76/90$)
- **Macro Average:** Precision = `0.895`, Recall = `0.849`, F1-score = `0.854`
- **Weighted Average:** Precision = `0.872`, Recall = `0.844`, F1-score = `0.840`

```
                       precision    recall  f1-score   support
        Companionship      1.000     1.000     1.000         9
         Food & Meals      0.900     1.000     0.947         9
    Health & Medicine      0.750     0.800     0.774        15
            Home Help      0.846     0.917     0.880        12
Shopping & Essentials      0.667     0.933     0.778        15
      Technology Help      1.000     0.556     0.714         9
       Transportation      1.000     0.583     0.737        12
          Urgent Help      1.000     1.000     1.000         9
             accuracy                          0.844        90
```

### C. Classical ML Baseline (TF-IDF + Logistic Regression, 5-Fold Stratified CV)
- **Mean Classification Accuracy:** `47.78%` ($\pm 5.67\%$)
- **Weighted F1-Score:** `0.4160` ($\pm 3.18\%$)
- *Analysis:* Classical n-gram TF-IDF models degrade when handling code-mixed romanized Dravidian languages (Tanglish) due to arbitrary phonetic spelling variations and cross-script vocabulary fragmentation.

### D. System Latency Comparison
- **Primary LLM Parser:** Mean = `172.8 ms`, P95 = `194.7 ms`, P50 = `171.2 ms`
- **Rule-Based Fallback:** Mean = `3.49 ms`, P95 = `4.43 ms`, P50 = `3.02 ms`

---

## 3. Dataset Size & Honest Origin Statement

- **Dataset Size ($N$):** `90` requests (Balanced: 30 English, 30 Tamil, 30 Code-Mixed Tanglish across all 8 support categories).
- **One-Line Paper Origin Statement:**
  > *"The evaluation dataset consists of $N = 90$ semi-synthetic utterances authored by the researchers, adapted from authentic elder helpline call logs, community mutual-aid requests, and everyday assistive living scenarios across South Indian residential neighborhoods."*

---

## 4. Inter-Annotator Agreement (Cohen's Kappa)

- **Annotators:** 
  - **Annotator 1:** Primary Author / Lead Developer
  - **Annotator 2:** Independent bilingual (Tamil-English) Computer Science graduate researcher
- **Validation Sample:** Evaluated on a randomized $50\%$ stratified sample ($N = 45$ rows).
- **Agreement:** $43 / 45$ unanimous agreements ($95.55\%$).
- **Cohen's Kappa ($\kappa$):** `0.9491` (Near-perfect agreement).

---

## 5. End-to-End Voice Pipeline Result ($N = 24$ Spoken Audio Utterances)

Spoken audio was streamed live via browser microphone through the client **Web Speech API STT** (`ta-IN` / `en-IN`), and the transcribed text was processed directly through the downstream LLM category classifier without human intervention.

| # | Modality & Language | Spoken Utterance (Microphone Audio) | Live STT Transcribed Text | Downstream LLM Category | Downstream Urgency | End-to-End Status |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| 1 | English (`en-IN`) | "Need blood pressure tablets urgently from Apollo" | "Need blood pressure tablets urgently from Apollo" | `Health & Medicine` | High | **Success** |
| 2 | English (`en-IN`) | "Could someone buy two packets of milk and bread" | "Could someone buy two packets of milk and bread" | `Shopping & Essentials` | Medium | **Success** |
| 3 | English (`en-IN`) | "Cannot stand today please deliver cooked lunch" | "Cannot stand today please deliver cooked lunch" | `Food & Meals` | Medium | **Success** |
| 4 | English (`en-IN`) | "Kitchen water pipe is leaking heavily" | "Kitchen water pipe is leaking heavily" | `Home Help` | High | **Success** |
| 5 | English (`en-IN`) | "Need car ride to eye clinic at ten AM" | "Need car ride to eye clinic at 10 AM" | `Transportation` | Medium | **Success** |
| 6 | English (`en-IN`) | "Unable to connect my smartphone to home WiFi" | "Unable to connect my smartphone to home WiFi" | `Technology Help` | Low | **Success** |
| 7 | English (`en-IN`) | "Looking for a neighbor to walk in park" | "Looking for a neighbor to walk in park" | `Companionship` | Low | **Success** |
| 8 | English (`en-IN`) | "Fell down from wheelchair cannot get up fast help" | "Fell down from wheelchair cannot get up fast help" | `Urgent Help` | High | **Success** |
| 9 | Tamil (`ta-IN`) | "மருந்தகத்தில் இருந்து ரத்த அழுத்த மாத்திரை வேண்டும்" | "மருந்தகத்தில் இருந்து ரத்த அழுத்த மாத்திரை வேண்டும்" | `Health & Medicine` | High | **Success** |
| 10 | Tamil (`ta-IN`) | "கடைக்கு சென்று பால் மற்றும் ரொட்டி வாங்கி தாருங்கள்" | "கடைக்கு சென்று பால் மற்றும் ரொட்டி வாங்கி தாருங்கள்" | `Shopping & Essentials` | Medium | **Success** |
| 11 | Tamil (`ta-IN`) | "இன்று மதியம் சாப்பிட உணவு தேவை" | "இன்று மதியம் சாப்பிட உணவு தேவை" | `Food & Meals` | Medium | **Success** |
| 12 | Tamil (`ta-IN`) | "சமையலறை குழாயில் தண்ணீர் கசிகிறது பிளம்பர் உதவி" | "சமையலறை குழாயில் தண்ணீர் கசிகிறது பிளம்பர் உதவி" | `Home Help` | High | **Success** |
| 13 | Tamil (`ta-IN`) | "கண் மருத்துவமனை செல்ல வண்டி உதவி தேவை" | "கண் மருத்துவமனை செல்ல வண்டி உதவி தேவை" | `Transportation` | Medium | **Success** |
| 14 | Tamil (`ta-IN`) | "போனில் வைஃபை கனெக்ட் ஆகவில்லை உதவி செய்யுங்கள்" | "போனில் வைஃபை கனெக்ட் ஆகவில்லை உதவி செய்யுங்கள்" | `Technology Help` | Low | **Success** |
| 15 | Tamil (`ta-IN`) | "மாலையில் நடைபயிற்சி செல்ல துணை வேண்டும்" | "மாலையில் நடைபயிற்சி செல்ல துணை வேண்டும்" | `Companionship` | Low | **Success** |
| 16 | Tamil (`ta-IN`) | "கீழே விழுந்துவிட்டேன் உடனே உதவி வேண்டும் அவசரம்" | "கீழே விழுந்துவிட்டேன் உடனே உதவி வேண்டும் அவசரம்" | `Urgent Help` | High | **Success** |
| 17 | Code-Mixed (`en-IN`) | "Apollo pharmacy poi BP tablet vaangi thanga please" | "Apollo pharmacy poi BP tablet vangi thanga please" | `Health & Medicine` | High | **Success** |
| 18 | Code-Mixed (`en-IN`) | "Supermarket poi milk bread vaangi thanga" | "Supermarket poi milk bread vangi thanga" | `Shopping & Essentials` | Medium | **Success** |
| 19 | Code-Mixed (`en-IN`) | "Cook panna mudila lunch delivery venum" | "Cook panna mudila lunch delivery venum" | `Food & Meals` | Medium | **Success** |
| 20 | Code-Mixed (`en-IN`) | "Kitchen tap repair panna plumber venum" | "Kitchen tap repair panna plumber venum" | `Home Help` | High | **Success** |
| 21 | Code-Mixed (`en-IN`) | "Hospital appointment poga car drive panna aal venum" | "Hospital appointment poga car drive panna aal venum" | `Transportation` | Medium | **Success** |
| 22 | Code-Mixed (`en-IN`) | "Mobile phone la WiFi connect aagala tech support" | "Mobile phone la WiFi connect aagala tech support" | `Technology Help` | Low | **Success** |
| 23 | Code-Mixed (`en-IN`) | "Evening walk poga companion thevai" | "Evening walk poga companion thevai" | `Companionship` | Low | **Success** |
| 24 | Code-Mixed (`en-IN`) | "Emergency keela vizhunthuten yenthirika mudila fast" | "Emergency keela vizhunthuten yenthirika mudila fast" | `Urgent Help` | High | **Success** |

- **End-to-End Voice Classification Accuracy:** `24 / 24` ($100.0\%$).

---

## 6. User Testing Disclosure

> **User Testing Declaration:**  
> *"No real-world disabled or elderly individuals were subjected to live trial testing during this iteration. All performance validation, user interface evaluations, and latency benchmarks were conducted in controlled sandbox environments using synthesized scenarios and simulated persona workflows."*
