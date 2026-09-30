# North Branch Restoration Project Seed Book

A static website, from an [archived EPA site](https://archive.epa.gov/greenacres/web/html/index-3.html) documenting native plants of the Chicago region, specifically for the North Branch Restoration Project's seed harvesting efforts.

## Project Overview

This repository contains the static HTML site for the **North Branch Restoration Project Seed Book**, a volunteer organization working to restore and manage savannas, woodlands, forests, and prairies along the North Branch of the Chicago River in the Cook County Forest Preserves.

### Purpose
- Guide seed harvesting efforts for restoration
- Provide information on native Illinois ecosystems
- Support conservation through the Coefficient of Conservatism (C) rating system
- Share knowledge with the public and restoration practitioners

## Plant Data Structure

Each plant entry in the main list includes:
- **Latin name** - Scientific classification
- **Common name** - English name
- **Family** - Taxonomic family
- **Swink/Wilhelm #** - Coefficient of Conservatism (C) value (0-10)

### Coefficient of Conservatism (C) Scale
| C Value | Interpretation |
|---------|----------------|
| 0 | May come from natural community or edge of parking lot |
| 5 | Remnant natural plant community (possibly degraded) |
| 10 | Natural area not terribly degraded |

## Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Hosting | Static (GitHub Pages, Apache, etc.) |
| Plant Content | Individual HTML files served via iframe |

### Directory Structure

```
north-branch-seed-book/
├── index.html          # Main plant list page
├── css/
│   └── epa.css         # Stylesheet
├── plants/             # Individual plant pages (e.g., whbanebry.html)
├── jpg/.               # Plant images (e.g., whbanebry.jpg)
├── README.md           # This file
```

## Important Notes

### Regional Context
- Chicago region native plant communities
- Cook County Forest Preserves
- Great Lakes ecosystem

### Seed Harvesting Guidelines
- **Never pick seeds from the wild without landowner permission**
- Use this guide to identify appropriate plants for harvesting
- Respect private property and protected areas

### Regional Limitations
- C-values are derived specifically for the **Chicago region**
- Values may not be valid outside this geographic area
- Locally applied values exist for:
  - Northern Ohio (Andreas 1993)
  - Missouri (Ladd in prep.)
  - Michigan (Herman et al. in prep.)

## Acknowledgments

- North Branch Restoration Project volunteers
- Cook County Forest Preserve District
- EPA Great Lakes program
- Wilhelm, Swink, and other researchers who developed the C-value system