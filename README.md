

<div align="center" style="font-family:'Montserrat', sans-serif;">
  
## Unfraud ๐
### An AI-based application in detecting healthcare fraud claims

  [![Link](https://img.shields.io/badge/Website-Link-yellow)](https://unfraud.vercel.app/) <br/>
</div>

## What are healthcare frauds? ๐ฉบ

 Healthcare or medical insurance fraud is the form of executing treatments to render medically unnecessary or over-utilizing services that result in useless costs to the healthcare system. Potential offenders may include patients, hospitals, doctors, vendors, suppliers, or pharmacists. The government claims that because of Medicare claim fraud, overall Medicare spending has exponentially increased.
Rigorous analysis of Medicare data has yielded many physicians who indulge in fraud. They adopt ways in which an ambiguous diagnosis code is used to adapt the costliest procedures and drugs. Insurance companies are the most vulnerable institutions impacted due to these bad practices. Due to this reason, insurance companies increased their insurance premiums, and as a result, healthcare is becoming more costly matter day by day.

## Impacts of healthcare frauds ๐

- The claims made in the medical healthcare sector alone represent more than 15% of the total scam
- As per the reports, it is stated that India's medical sector loses about 600-800 crore rupees every year.

## Solution proposed ๐งช

We propose a AI-based API Provider that detects fraud in real-time. To receive a claim, a user must submit the appropriate information to our forum. Our advanced AI which contains NLP models and simple ML models reviews the given information and if it finds fraud rejects the data transaction
   
## Steps Involved ๐

- Data Scrapping and Data analysis for finding the dataset and features that are important for prediction.
- Machine learning is used for flagging the claims according to the dataset and the features.

## How to interact with our API โ

* Send POST request to URL with following field
```
  {
    'amt1': 'insuranceAmount',
    'disease': [listOfDisease],
    'amt2': 'inPatientAmount',
    'amt3': 'outPatientAmount',
    'age': 'age',
    'patin': 'isInPatient',
    'nod': 'noOfDisease'
  }

```
* Response will boolean value. For example ```{"isFraud":true}```


## Tech Stacks used ๐ป

  โข NextJS<br/>
  โข Typescript<br/>
  โข Tailwind<br/>
  โข Django<br/>
  โข Scikit Learn
