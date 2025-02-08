# Coffee Shop Traffic Pattern Analysis

A data analysis project to identify optimal business hours for coffee shops in downtown Seattle based on customer traffic patterns.

## Overview
This project analyzes hourly customer traffic data from 30 coffee shops to identify market opportunities in underserved time slots.

## Data
- Source: Google Popular Times API
- Sample size: 30 coffee shops
- Time period: January 2024
- Metrics: Hourly customer count (6 AM - 8 PM)

## Methodology
1. Data Collection
   - Scraped hourly traffic data using Google Popular Times
   - Cleaned and normalized traffic counts

2. Analysis
   - Applied K-means clustering (k=3) to identify traffic patterns
   - Identified three distinct clusters: morning peak, afternoon peak, steady traffic

3. Visualization
   - Interactive line chart showing hourly patterns
   - Traffic comparison across different shop clusters

## Key Findings
- Early morning gap (6-7 AM): Only 15% of shops open
- Evening opportunity (after 6 PM): 20% potential revenue increase
- Three distinct traffic patterns identified:
  - Morning peak (40% of shops)
  - Afternoon peak (33% of shops)
  - Steady traffic (27% of shops)

## Tools Used
- Python (pandas, scikit-learn)
- React with Recharts
- Google Popular Times API

## Setup
1. Clone repository
2. Install dependencies: `npm install`
3. Run analysis: `python analyze_traffic.py`
4. Start visualization: `npm start`
