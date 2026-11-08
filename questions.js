/* ==========================================================================
   Pharmacognosy II - Sheet 1: Complete Questions Bank
   Includes: Elements Identification, Key Plant Association, Negative Characters,
   Chemical Tests, Physical Properties, and Transverse Sections (30-38).
   ========================================================================== */

const elementsQuizData = [
    // =========================================================================
    // 1. CASCARA BARK (Images 1 to 5 + Tests & Negatives)
    // =========================================================================
    {
        q: "Identify the diagnostic crystals shown in this Glycerin mount:",
        image: "img/image1.jpg",
        opts: [
            "Prisms and cluster crystals of Ca.Ox",
            "Acicular crystals of Ca.Ox",
            "Sandy crystals of Ca.Ox",
            "Conglomerates of Ca.Ox"
        ],
        correct: 0,
        hint: "Cascara bark contains both prisms and cluster crystals of calcium oxalate."
    },
    {
        q: "Prisms and cluster crystals of Ca.Ox (Image 1) are key diagnostic elements of:",
        image: "img/image1.jpg",
        opts: [
            "Cascara bark",
            "Cinnamon bark",
            "Cinchona bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "The co-existence of prisms and clusters of Ca.Ox is characteristic of Cascara bark."
    },
    {
        q: "What are these structures observed in the Glycerin mount of Cascara bark?",
        image: "img/image2.jpg",
        opts: [
            "Starch grains",
            "Sandy crystals",
            "Oil droplets",
            "Pollen grains"
        ],
        correct: 0,
        hint: "Starch grains in Cascara bark are small and visible in glycerin mount."
    },
    {
        q: "Identify this key diagnostic element shown in Image 3 (KOH mount):",
        image: "img/image3.jpg",
        opts: [
            "Crystal sheath (Phloem fibers surrounded by Ca.Ox prisms)",
            "Yellow fusiform phloem fiber",
            "Transparent slender phloem fiber",
            "Balloon-like pericyclic fiber"
        ],
        correct: 0,
        hint: "Crystal sheath is the chief diagnostic element for Cascara bark."
    },
    {
        q: "Crystal sheath (Phloem fibers with crystal prisms of Ca-ox) is the key element of:",
        image: "img/image3.jpg",
        opts: [
            "Cascara bark",
            "Cinnamon bark",
            "Cinchona bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Crystal sheath is diagnostic for Cascara bark."
    },
    {
        q: "Identify this tissue shown in Image 4 from Cascara bark:",
        image: "img/image4.jpg",
        opts: [
            "Cork cells (polygonal with brownish contents)",
            "Xylem vessels",
            "Phloem parenchyma",
            "Collenchyma"
        ],
        correct: 0,
        hint: "Cork cells in Cascara appear polygonal in surface view."
    },
    {
        q: "Identify these sclerenchymatous stone cells shown in Image 5:",
        image: "img/image5.jpg",
        opts: [
            "Rounded to elongated groups of Sclereids",
            "Horse shoe sclereids",
            "Evenly thickening isolated sclereids",
            "Balloon-like fibers"
        ],
        correct: 0,
        hint: "Cascara bark contains rounded to elongated groups of thick-walled sclereids."
    },
    {
        q: "Which element is completely ABSENT in Cascara bark powder?",
        image: null,
        opts: [
            "Xylem vessels",
            "Cork cells",
            "Starch grains",
            "Sclereids"
        ],
        correct: 0,
        hint: "Barks lack xylem vessels because they consist of tissues outside the vascular cambium."
    },
    {
        q: "In Borntrager's test for Cascara bark, shaking the DCM extract with NH4OH or KOH produces:",
        image: null,
        opts: [
            "Rose Red colour in the aqueous alkaline layer",
            "Blue fluorescence",
            "White creamy precipitate",
            "Pale green colour"
        ],
        correct: 0,
        hint: "Free anthraquinones produce a characteristic Rose Red color in the alkaline layer."
    },
    {
        q: "Modified Borntrager's test using dil. HCl and FeCl3 is carried out on Cascara bark to detect:",
        image: null,
        opts: [
            "C-Glycosides (Cascarosides)",
            "Alkaloids",
            "Volatile oils",
            "Mucilage"
        ],
        correct: 0,
        hint: "FeCl3 and dil. HCl oxidatively cleave resistant C-C glycosidic bonds in C-glycosides."
    },

    // =========================================================================
    // 2. CINNAMON BARK (Images 6 to 11 + Tests & Negatives)
    // =========================================================================
    {
        q: "Identify the granules shown in Image 6 (Glycerin mount):",
        image: "img/image6.jpg",
        opts: [
            "Starch grains",
            "Sandy crystals",
            "Calcium oxalate clusters",
            "Pollen grains"
        ],
        correct: 0,
        hint: "Starch grains in Cinnamon bark are abundant in glycerin mounts."
    },
    {
        q: "Identify this characteristic narrow fiber shown in Image 7:",
        image: "img/image7.jpg",
        opts: [
            "Transparent Slender Phloem Fiber",
            "Yellow Fusiform Phloem Fiber",
            "Crystal sheath",
            "Unlignified balloon-like fiber"
        ],
        correct: 0,
        hint: "Cinnamon is famous for its very narrow, transparent slender phloem fibers with narrow lumens."
    },
    {
        q: "Transparent Slender Phloem Fiber (Image 7) is the key diagnostic element of:",
        image: "img/image7.jpg",
        opts: [
            "Cinnamon bark",
            "Cascara bark",
            "Cinchona bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "Transparent slender phloem fiber is diagnostic for Cinnamon bark."
    },
    {
        q: "Identify the type of Calcium Oxalate crystals found in Cinnamon bark (Image 8):",
        image: "img/image8.jpg",
        opts: [
            "Acicular crystals of Ca.OX (needles)",
            "Sandy crystals of Ca.OX",
            "Prisms and cluster crystals",
            "Conglomerates"
        ],
        correct: 0,
        hint: "Cinnamon bark contains small, fine needle-like (acicular) crystals of Ca.Ox."
    },
    {
        q: "Acicular crystals of Ca.OX are diagnostic for which bark?",
        image: "img/image8.jpg",
        opts: [
            "Cinnamon bark",
            "Cascara bark",
            "Cinchona bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "Acicular crystals of Ca.Ox identify Cinnamon bark."
    },
    {
        q: "Identify this large secretory element shown in Image 9 (KOH mount):",
        image: "img/image9.jpg",
        opts: [
            "Oil cell",
            "Mucilage cavity",
            "Labiaceous hair",
            "Parenchyma cell"
        ],
        correct: 0,
        hint: "Oil cells in Cinnamon bark store essential volatile oil (cinnamic aldehyde)."
    },
    {
        q: "Identify the stone cell type shown in Image 10 from Cinnamon bark:",
        image: "img/image10.jpg",
        opts: [
            "Evenly Thickening Sclereids",
            "Horse shoe Sclereids",
            "Crystal sheath",
            "Phloem fiber"
        ],
        correct: 0,
        hint: "Evenly thickening sclereids possess uniformly thickened walls on all sides."
    },
    {
        q: "Identify this diagnostic sclereid shown in Image 11 thickened on 3 sides only:",
        image: "img/image11.jpg",
        opts: [
            "Horse shoe Sclereids",
            "Evenly Thickening Sclereids",
            "Rounded groups of sclereids",
            "Cork cells"
        ],
        correct: 0,
        hint: "Horse shoe sclereids have U-shaped wall thickening (outer wall remains thin)."
    },
    {
        q: "Horse shoe Sclereids and Evenly Thickening Sclereids are key elements of:",
        image: "img/image11.jpg",
        opts: [
            "Cinnamon bark",
            "Cascara bark",
            "Cinchona bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Both types of sclereids are diagnostic for Cinnamon bark."
    },
    {
        q: "Which elements are completely ABSENT in official Cinnamon bark powder?",
        image: null,
        opts: [
            "Cork and Xylem vessels",
            "Sclereids and Fibers",
            "Starch grains and Oil cells",
            "Acicular crystals"
        ],
        correct: 0,
        hint: "Cinnamon is a peeled bark, so Cork is absent; and as a bark, Xylem vessels are absent."
    },
    {
        q: "In Cinnamon bark testing, adding Ferric chloride to Cinnamic aldehyde produces:",
        image: null,
        opts: [
            "Brown colour",
            "Pale green colour",
            "Blue colour",
            "Rose Red colour"
        ],
        correct: 0,
        hint: "Cinnamic aldehyde gives brown, V.O in alcohol gives pale green, and Eugenol gives blue with FeCl3."
    },
    {
        q: "In Cinnamon testing, adding Ferric chloride to Eugenol produces:",
        image: null,
        opts: [
            "Blue colour",
            "Brown colour",
            "Pale green colour",
            "White precipitate"
        ],
        correct: 0,
        hint: "FeCl3 reacts with the phenolic group of Eugenol to give a blue colour."
    },
    {
        q: "When alcoholic extract of Cinnamon bark is treated with Phenylhydrazine hydrochloride, it gives:",
        image: null,
        opts: [
            "Red colour (crystals)",
            "White creamy precipitate",
            "Blue fluorescence",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Phenylhydrazine forms red phenylhydrazone crystals with cinnamic aldehyde."
    },

    // =========================================================================
    // 3. CINCHONA BARK (Images 12 to 15 + Tests & Negatives)
    // =========================================================================
    {
        q: "Identify this large, thick-walled, pitted fiber shown in Image 12:",
        image: "img/image12.jpg",
        opts: [
            "Yellow Fusiform Phloem Fiber",
            "Transparent Slender Phloem Fiber",
            "Crystal sheath",
            "Balloon-like pericyclic fiber"
        ],
        correct: 0,
        hint: "Cinchona phloem fibers are distinctly large, yellow, fusiform with funnel-shaped pits."
    },
    {
        q: "Yellow Fusiform Phloem Fiber (Image 12) is the key diagnostic element of:",
        image: "img/image12.jpg",
        opts: [
            "Cinchona bark",
            "Cascara bark",
            "Cinnamon bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "Yellow fusiform phloem fiber is the hallmark diagnostic element of Cinchona bark."
    },
    {
        q: "Identify the type of calcium oxalate crystals shown in Image 13:",
        image: "img/image13.jpg",
        opts: [
            "Sandy crystals of Ca.ox (microcrystals)",
            "Acicular crystals of Ca.ox",
            "Prisms and cluster crystals",
            "Conglomerates"
        ],
        correct: 0,
        hint: "Microcrystals filling parenchymatous cells in Cinchona are known as sandy crystals / crystal sand."
    },
    {
        q: "Sandy crystals of Ca.ox (crystal sand) are diagnostic for:",
        image: "img/image13.jpg",
        opts: [
            "Cinchona bark",
            "Cascara bark",
            "Cinnamon bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Sandy crystals of Ca.Ox are a diagnostic element of Cinchona bark."
    },
    {
        q: "Identify these rounded structures present in Cinchona bark (Image 14):",
        image: "img/image14.jpg",
        opts: [
            "Starch grains",
            "Sandy crystals",
            "Oil drops",
            "Pollen grains"
        ],
        correct: 0,
        hint: "Small starch grains are present in parenchymatous cells of Cinchona bark."
    },
    {
        q: "Identify this parenchymatous tissue shown in Image 15 (KOH mount):",
        image: "img/image15.jpg",
        opts: [
            "Phloem parenchyma",
            "Xylem vessels",
            "Cork cells",
            "Endodermis"
        ],
        correct: 0,
        hint: "Phloem parenchyma cells in Cinchona are axially elongated with dark contents/crystals."
    },
    {
        q: "Which element is completely ABSENT in Cinchona bark powder?",
        image: null,
        opts: [
            "Xylem vessels",
            "Phloem fibers",
            "Cork",
            "Sandy crystals"
        ],
        correct: 0,
        hint: "Like all bark drugs, Cinchona bark lacks Xylem vessels."
    },
    {
        q: "Specific test for Quinine: Cinchona powder treated with Dil. H2SO4 exhibits:",
        image: null,
        opts: [
            "Blue fluorescence",
            "Rose Red colour",
            "White creamy precipitate",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Quinine salts in dilute sulfuric acid display vivid Blue fluorescence under daylight/UV."
    },
    {
        q: "General test for alkaloids: Acidulated extract of Cinchona + Mayer's Reagent produces:",
        image: null,
        opts: [
            "White Creamy PPT",
            "Blue fluorescence",
            "Red coloration",
            "Pale green colour"
        ],
        correct: 0,
        hint: "Mayer's reagent gives a characteristic white creamy precipitate with alkaloids."
    },

    // =========================================================================
    // 4. MENTHA HERB (PEPPERMINT) (Images 16 to 23 + Tests & Negatives)
    // =========================================================================
    {
        q: "Identify the trichome shown in Image 16 (Mentha herb):",
        image: "img/image16.jpg",
        opts: [
            "Non-glandular hair (multicellular uniseriate with striated cuticle)",
            "Labiaceous glandular hair",
            "Capitate hair",
            "Cottony hair"
        ],
        correct: 0,
        hint: "Mentha non-glandular hairs are uniseriate with distinct cuticular striations."
    },
    {
        q: "What is the structural characteristic of the hair shown in Image 17?",
        image: "img/image17.jpg",
        opts: [
            "Multicellular uniseriate with pointed apex and striated cuticle",
            "Bicellular with smooth cuticle",
            "S-shaped unicellular hair",
            "Cottony twisted hair"
        ],
        correct: 0,
        hint: "It has a pointed apical cell and warty/striated cuticle."
    },
    {
        q: "Identify this peltate glandular hair characteristic of the Lamiaceae family (Image 18):",
        image: "img/image18.jpg",
        opts: [
            "Labiaceous hair",
            "Capitate hair",
            "Non-glandular hair",
            "Cottony hair"
        ],
        correct: 0,
        hint: "Labiaceous hair has a short stalk and an 8-celled radiating head."
    },
    {
        q: "Labiaceous hair (Image 18) is the key diagnostic element of:",
        image: "img/image18.jpg",
        opts: [
            "Mentha Herb (Peppermint)",
            "Cascara bark",
            "Cinchona bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Labiaceous hair is the diagnostic glandular trichome of Mentha (Lamiaceae)."
    },
    {
        q: "Identify these elongated cells shown in Image 19:",
        image: "img/image19.jpg",
        opts: [
            "Epidermal cells from the stem",
            "Cork cells",
            "Phloem parenchyma",
            "Endodermal cells"
        ],
        correct: 0,
        hint: "Stem epidermal cells of Mentha are axially elongated with straight or slightly wavy walls."
    },
    {
        q: "Name this secretory glandular trichome seen in top view (Image 20):",
        image: "img/image20.jpg",
        opts: [
            "Labiaceous hair",
            "Capitate hair",
            "S-shaped hair",
            "Non-glandular hair"
        ],
        correct: 0,
        hint: "Top view of Labiaceous hair showing the circular 8-celled radiating head."
    },
    {
        q: "Identify these conducting elements present in Mentha herb (Image 21):",
        image: "img/image21.jpg",
        opts: [
            "Xylem Vessels (Spiral and Annular)",
            "Phloem fibers",
            "Pericyclic fibers",
            "Crystal sheath"
        ],
        correct: 0,
        hint: "Herbs contain lignified spiral and annular xylem vessels (absent in barks)."
    },
    {
        q: "Identify the type of stomata shown in Mentha leaf epidermis (Image 22):",
        image: "img/image22.jpg",
        opts: [
            "Diacytic Stomata",
            "Anomocytic Stomata",
            "Paracytic Stomata",
            "Anisocytic Stomata"
        ],
        correct: 0,
        hint: "Diacytic (caryophyllaceous) stomata are enclosed by two subsidiary cells whose transverse axis is perpendicular to the pore."
    },
    {
        q: "Diacytic stomata and Labiaceous hairs together are diagnostic for:",
        image: "img/image22.jpg",
        opts: [
            "Mentha Herb",
            "Vinca Herb",
            "Cascara bark",
            "Cinnamon bark"
        ],
        correct: 0,
        hint: "Both are diagnostic microscopical characters of Mentha herb."
    },
    {
        q: "Identify this small glandular trichome shown in Image 23:",
        image: "img/image23.jpg",
        opts: [
            "Capitate hair",
            "Labiaceous hair",
            "Cottony hair",
            "Non-glandular stem hair"
        ],
        correct: 0,
        hint: "Capitate hair consists of a unicellular stalk and a unicellular or bicellular rounded head."
    },
    {
        q: "Which elements are completely ABSENT in Mentha herb powder?",
        image: null,
        opts: [
            "No Starch grains, No Ca.Ox crystals, No Cork",
            "No Xylem vessels, No Stomata",
            "No Hairs, No Cuticle",
            "No Epidermal cells"
        ],
        correct: 0,
        hint: "Mentha herb powder contains NO starch grains, NO calcium oxalate crystals, and NO cork."
    },
    {
        q: "Chemical test for Mentha: Peppermint oil heated with glacial acetic and 0.3% nitric acid gives:",
        image: null,
        opts: [
            "Blue colour, turning to golden yellow colour",
            "Rose Red colour in alkaline layer",
            "White creamy precipitate",
            "Vivid blue fluorescence"
        ],
        correct: 0,
        hint: "Menthol / peppermint oil gives a blue colour that gradually converts into golden yellow."
    },

    // =========================================================================
    // 5. VINCA HERB (Images 24 to 29 + Tests, Negatives & Physicals)
    // =========================================================================
    {
        q: "What are the physical properties of Vinca Herb powder?",
        image: null,
        opts: [
            "Colour: Grayish green, Odour: Disagreeable, Taste: Bitter",
            "Colour: Yellowish, Odour: Agreeable aromatic, Taste: Pungent",
            "Colour: Brown, Odour: Fragrant, Taste: Sweet",
            "Colour: Bright green, Odour: Aromatic minty, Taste: Pungent"
        ],
        correct: 0,
        hint: "Slide 14: Vinca herb is grayish green, disagreeable in odour, and intensely bitter."
    },
    {
        q: "Identify these short conical hairs from Vinca herb (Image 24):",
        image: "img/image24.jpg",
        opts: [
            "Non-glandular hairs of stem",
            "Cottony hairs",
            "Labiaceous hairs",
            "Capitate hairs"
        ],
        correct: 0,
        hint: "Short conical non-glandular hairs cover the stem of Vinca herb."
    },
    {
        q: "Identify these crystals observed in Vinca herb (Image 25):",
        image: "img/image25.jpg",
        opts: [
            "Conglomerates of Ca. ox.",
            "Sandy crystals of Ca.ox",
            "Acicular crystals of Ca.ox",
            "Crystal sheath"
        ],
        correct: 0,
        hint: "Vinca contains conglomerates (aggregates of cluster crystals) of calcium oxalate."
    },
    {
        q: "Conglomerates of Ca. ox. are characteristic crystals of:",
        image: "img/image25.jpg",
        opts: [
            "Vinca Herb",
            "Mentha Herb",
            "Cascara bark",
            "Cinchona bark"
        ],
        correct: 0,
        hint: "Conglomerates of Ca.Ox are diagnostic for Vinca herb."
    },
    {
        q: "Identify this uniquely curved trichome from Vinca herb (Image 26):",
        image: "img/image26.jpg",
        opts: [
            "S-Shaped hair",
            "Cottony hair",
            "Labiaceous hair",
            "Capitate hair"
        ],
        correct: 0,
        hint: "S-shaped hairs occur on the leaf margins of Vinca."
    },
    {
        q: "S-Shaped hair (Image 26 & 27) is the key diagnostic element of:",
        image: "img/image27.jpg",
        opts: [
            "Vinca Herb",
            "Mentha Herb",
            "Cinnamon bark",
            "Cascara bark"
        ],
        correct: 0,
        hint: "S-shaped non-glandular hairs are diagnostic for Vinca (Catharanthus roseus)."
    },
    {
        q: "Identify this long, articulated, ribbon-like hair from Vinca (Image 28):",
        image: "img/image28.jpg",
        opts: [
            "Cottony hair",
            "S-Shaped hair",
            "Labiaceous hair",
            "Capitate hair"
        ],
        correct: 0,
        hint: "Cottony hairs in Vinca are long, unbranched, and resemble cotton fibers."
    },
    {
        q: "Cottony hairs are a diagnostic trichome type found in:",
        image: "img/image28.jpg",
        opts: [
            "Vinca Herb",
            "Mentha Herb",
            "Cascara bark",
            "Cinchona bark"
        ],
        correct: 0,
        hint: "Cottony hairs are characteristic of Vinca herb."
    },
    {
        q: "Identify this fiber from Vinca herb that swells markedly in clearing reagents (Image 29):",
        image: "img/image29.jpg",
        opts: [
            "Unlignified balloon like pericyclic fibers",
            "Yellow fusiform phloem fiber",
            "Transparent slender phloem fiber",
            "Crystal sheath"
        ],
        correct: 0,
        hint: "Vinca pericyclic fibers swell into balloon-like expansions in KOH."
    },
    {
        q: "Unlignified balloon like pericyclic fibers are the key element of:",
        image: "img/image29.jpg",
        opts: [
            "Vinca Herb",
            "Cinnamon bark",
            "Cinchona bark",
            "Cascara bark"
        ],
        correct: 0,
        hint: "Unlignified balloon-like pericyclic fibers identify Vinca herb."
    },
    {
        q: "Which elements are completely ABSENT in Vinca herb powder?",
        image: null,
        opts: [
            "No Starch grains, No Cork",
            "No Calcium oxalate",
            "No Xylem vessels",
            "No Non-glandular hairs"
        ],
        correct: 0,
        hint: "Vinca herb lacks starch grains and cork."
    },
    {
        q: "Chemical test for alkaloids: Acidulated extract of Vinca + Mayer's Reagent produces:",
        image: null,
        opts: [
            "White Creamy PPT",
            "Rose Red alkaline layer",
            "Blue fluorescence",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Vinca indole alkaloids (Vincristine, Vinblastine) give a white creamy precipitate with Mayer's reagent."
    },

    // =========================================================================
    // 6. GINGER RHIZOME (Physical Properties - Slide 18)
    // =========================================================================
    {
        q: "What are the physical properties of Ginger rhizome powder?",
        image: null,
        opts: [
            "Colour: Yellowish, Odour: Agreeable aromatic, Taste: Pungent",
            "Colour: Grayish green, Odour: Disagreeable, Taste: Bitter",
            "Colour: Reddish brown, Odour: Aromatic, Taste: Sweet mucilaginous",
            "Colour: White, Odour: Odourless, Taste: Bland"
        ],
        correct: 0,
        hint: "Slide 18: Ginger rhizome is yellowish in colour, agreeable aromatic in odour, and pungent in taste."
    }
];

// =============================================================================
// TRANSVERSE SECTIONS (T.S.) DATA (Images 30 to 38)
// =============================================================================
const tsQuizData = [
    // -------------------------------------------------------------------------
    // 30 - Diagram of Cascara bark
    // -------------------------------------------------------------------------
    {
        q: "In this T.S. diagram of Cascara bark (Image 30), identify label (1):",
        image: "img/image30.jpg",
        opts: ["Cork", "Phelloderm", "Medullary rays", "Sclereides"],
        correct: 0,
        hint: "Label 1 is the outermost protective tissue: Cork."
    },
    {
        q: "In this T.S. diagram of Cascara bark (Image 30), identify label (2):",
        image: "img/image30.jpg",
        opts: ["Phelloderm", "Cork", "Medullary rays", "Phloem fibers"],
        correct: 0,
        hint: "Label 2 indicates Phelloderm directly beneath the cork."
    },
    {
        q: "In this T.S. diagram of Cascara bark (Image 30), identify label (3):",
        image: "img/image30.jpg",
        opts: ["Medullary rays", "Phelloderm", "Cork", "Sclereides"],
        correct: 0,
        hint: "Label 3 indicates Medullary rays running radially."
    },
    {
        q: "In this T.S. diagram of Cascara bark (Image 30), identify label (4):",
        image: "img/image30.jpg",
        opts: ["Sclereides (Stone cell groups)", "Cork", "Phloem fibers", "Phelloderm"],
        correct: 0,
        hint: "Label 4 points to large rounded groups of Sclereides."
    },
    {
        q: "In this T.S. diagram of Cascara bark (Image 30), identify label (5):",
        image: "img/image30.jpg",
        opts: [
            "Phloem fibers surrounded with crystal prisms of Ca-ox (crystal sheath)",
            "Medullary rays",
            "Secretion canals",
            "Pericyclic fibers"
        ],
        correct: 0,
        hint: "Label 5 indicates Phloem fibers surrounded with crystal prisms of Ca-ox (crystal sheath)."
    },
    {
        q: "This T.S. (Image 30) represents the anatomy of which plant and organ?",
        image: "img/image30.jpg",
        opts: [
            "Cascara - Bark",
            "Cinchona - Bark",
            "Cinnamon - Bark",
            "Mentha - Stem"
        ],
        correct: 0,
        hint: "Image 30 is the T.S. diagram of Cascara bark."
    },

    // -------------------------------------------------------------------------
    // 31 - T.S. diagram of Cinchona bark
    // -------------------------------------------------------------------------
    {
        q: "In this T.S. diagram of Cinchona bark (Image 31), identify label (1):",
        image: "img/image31.jpg",
        opts: ["Cork", "Cortex", "Secretion Canals", "Phloem fibers"],
        correct: 0,
        hint: "Label 1 is Cork."
    },
    {
        q: "In this T.S. diagram of Cinchona bark (Image 31), identify label (2):",
        image: "img/image31.jpg",
        opts: ["Cortex", "Cork", "Phloem fibers", "Medullary rays"],
        correct: 0,
        hint: "Label 2 indicates Cortex."
    },
    {
        q: "In this T.S. diagram of Cinchona bark (Image 31), identify label (3):",
        image: "img/image31.jpg",
        opts: ["Secretion Canals", "Phloem fibers", "Cork", "Cortex"],
        correct: 0,
        hint: "Label 3 points to large Secretion Canals in the cortex."
    },
    {
        q: "In this T.S. diagram of Cinchona bark (Image 31), identify label (4):",
        image: "img/image31.jpg",
        opts: ["Phloem fibers", "Medullary rays", "Cork", "Secretion canals"],
        correct: 0,
        hint: "Label 4 indicates stout isolated Phloem fibers."
    },
    {
        q: "In this T.S. diagram of Cinchona bark (Image 31), identify label (5) [M.R]:",
        image: "img/image31.jpg",
        opts: ["Medullary rays", "Cortex", "Cork", "Phloem fibers"],
        correct: 0,
        hint: "Label 5 indicates Medullary rays (M.R)."
    },
    {
        q: "This T.S. (Image 31) belongs to which medicinal plant and organ?",
        image: "img/image31.jpg",
        opts: [
            "Cinchona - Bark",
            "Cascara - Bark",
            "Cinnamon - Bark",
            "Vinca - Stem"
        ],
        correct: 0,
        hint: "Image 31 is the T.S. diagram of Cinchona bark."
    },

    // -------------------------------------------------------------------------
    // 32 - T.S. of Cinnamon bark (Diagram)
    // -------------------------------------------------------------------------
    {
        q: "In this T.S. diagram of Cinnamon bark (Image 32), identify label (1):",
        image: "img/image32.jpg",
        opts: ["Pericyclic fibers", "Sclereid layer of pericycle", "Oil cells", "Phloem fibers"],
        correct: 0,
        hint: "Label 1 indicates Pericyclic fibers."
    },
    {
        q: "In this T.S. diagram of Cinnamon bark (Image 32), identify label (2):",
        image: "img/image32.jpg",
        opts: ["Sclereid layer of pericycle", "Oil cells", "Medullary rays", "Phloem fibers"],
        correct: 0,
        hint: "Label 2 indicates the continuous Sclereid layer of pericycle."
    },
    {
        q: "In this T.S. diagram of Cinnamon bark (Image 32), identify label (3):",
        image: "img/image32.jpg",
        opts: ["Oil cells", "Medullary rays", "Phloem fibers", "Pericyclic fibers"],
        correct: 0,
        hint: "Label 3 indicates Oil cells."
    },
    {
        q: "In this T.S. diagram of Cinnamon bark (Image 32), identify label (4):",
        image: "img/image32.jpg",
        opts: ["Medullary rays", "Phloem fibers", "Oil cells", "Sclereids"],
        correct: 0,
        hint: "Label 4 indicates Medullary rays."
    },
    {
        q: "In this T.S. diagram of Cinnamon bark (Image 32), identify label (5):",
        image: "img/image32.jpg",
        opts: ["Phloem fibers", "Oil cells", "Pericyclic fibers", "Sclereids"],
        correct: 0,
        hint: "Label 5 indicates Phloem fibers."
    },
    {
        q: "This anatomical diagram (Image 32) represents:",
        image: "img/image32.jpg",
        opts: [
            "T.S. diagram of Cinnamon bark",
            "T.S. diagram of Cascara bark",
            "T.S. diagram of Cinchona bark",
            "T.S. of Mentha stem"
        ],
        correct: 0,
        hint: "Image 32 is the T.S. diagram of Cinnamon bark."
    },

    // -------------------------------------------------------------------------
    // 33 - Detailed T.S. of Cinnamon bark
    // -------------------------------------------------------------------------
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (1):",
        image: "img/image33.jpg",
        opts: ["Pericyclic fibers", "Sclereids", "Secondary phloem", "Mucilage cells"],
        correct: 0,
        hint: "Label 1 points to Pericyclic fibers."
    },
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (2):",
        image: "img/image33.jpg",
        opts: ["Sclereids", "Pericyclic fibers", "Secondary phloem", "Oil cells"],
        correct: 0,
        hint: "Label 2 indicates Sclereids."
    },
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (3):",
        image: "img/image33.jpg",
        opts: ["Secondary phloem", "Medullary rays", "Mucilage cells", "Pericyclic fibers"],
        correct: 0,
        hint: "Label 3 indicates Secondary phloem."
    },
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (4):",
        image: "img/image33.jpg",
        opts: ["Medullary rays", "Phloem fibers", "Mucilage cells", "Oil cells"],
        correct: 0,
        hint: "Label 4 indicates Medullary rays."
    },
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (5):",
        image: "img/image33.jpg",
        opts: ["Phloem fibers", "Mucilage cells", "Oil cells", "Sclereids"],
        correct: 0,
        hint: "Label 5 indicates Phloem fibers."
    },
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (6):",
        image: "img/image33.jpg",
        opts: ["Mucilage cells", "Oil cells", "Sclereids", "Phloem fibers"],
        correct: 0,
        hint: "Label 6 indicates Mucilage cells."
    },
    {
        q: "In this Detailed T.S. of Cinnamon bark (Image 33), identify label (7):",
        image: "img/image33.jpg",
        opts: ["Oil cells", "Mucilage cells", "Medullary rays", "Phloem fibers"],
        correct: 0,
        hint: "Label 7 indicates Oil cells."
    },

    // -------------------------------------------------------------------------
    // 34 - T.S. of Mentha Stem (Detailed corners)
    // -------------------------------------------------------------------------
    {
        q: "In this Detailed T.S. of Mentha Stem (Image 34), identify label (1):",
        image: "img/image34.jpg",
        opts: ["Collenchyma cells at corners", "Endodermis", "Phloem", "Pith"],
        correct: 0,
        hint: "Mentha stem has prominent collenchyma cells at the 4 corners."
    },
    {
        q: "In this Detailed T.S. of Mentha Stem (Image 34), identify label (2):",
        image: "img/image34.jpg",
        opts: ["Endodermis", "Collenchyma", "Phloem", "Pith"],
        correct: 0,
        hint: "Label 2 identifies the Endodermis."
    },
    {
        q: "In this Detailed T.S. of Mentha Stem (Image 34), identify label (3):",
        image: "img/image34.jpg",
        opts: ["Phloem", "Fibers", "Pith", "Endodermis"],
        correct: 0,
        hint: "Label 3 indicates Phloem."
    },
    {
        q: "In this Detailed T.S. of Mentha Stem (Image 34), identify label (4):",
        image: "img/image34.jpg",
        opts: ["Fibers (and Xylem)", "Phloem", "Collenchyma", "Pith"],
        correct: 0,
        hint: "Label 4 indicates Fibers / vascular bundle elements."
    },
    {
        q: "In this Detailed T.S. of Mentha Stem (Image 34), identify label (5):",
        image: "img/image34.jpg",
        opts: ["Pith", "Endodermis", "Phloem", "Collenchyma"],
        correct: 0,
        hint: "Label 5 indicates the large central Pith."
    },
    {
        q: "This section (Image 34) represents the anatomy of:",
        image: "img/image34.jpg",
        opts: [
            "Mentha - Stem",
            "Vinca - Stem",
            "Cascara - Bark",
            "Cinchona - Bark"
        ],
        correct: 0,
        hint: "Image 34 is the Detailed T.S. of Mentha Stem."
    },

    // -------------------------------------------------------------------------
    // 35 - T.S. diagram of Mentha Stem
    // -------------------------------------------------------------------------
    {
        q: "In this T.S. diagram of Mentha Stem (Image 35), identify label (1):",
        image: "img/image35.jpg",
        opts: ["Epidermis", "Collenchyma", "Parenchymatous cortex", "Pericycle"],
        correct: 0,
        hint: "Label 1 is the outer Epidermis."
    },
    {
        q: "In this T.S. diagram of Mentha Stem (Image 35), identify label (2):",
        image: "img/image35.jpg",
        opts: ["Collenchyma", "Epidermis", "Endodermis", "Phloem"],
        correct: 0,
        hint: "Label 2 indicates Collenchyma."
    },
    {
        q: "In this T.S. diagram of Mentha Stem (Image 35), identify label (3):",
        image: "img/image35.jpg",
        opts: ["Parenchymatous Cortex", "Pericycle", "Endodermis", "Xylem"],
        correct: 0,
        hint: "Label 3 indicates Parenchymatous Cortex."
    },
    {
        q: "In this T.S. diagram of Mentha Stem (Image 35), identify labels (4 & 5):",
        image: "img/image35.jpg",
        opts: [
            "4: Pericycle, 5: Endodermis",
            "4: Endodermis, 5: Pericycle",
            "4: Phloem, 5: Xylem",
            "4: Collenchyma, 5: Cortex"
        ],
        correct: 0,
        hint: "Label 4 is Pericycle, and 5 is Endodermis."
    },
    {
        q: "In this T.S. diagram of Mentha Stem (Image 35), identify labels (6 & 7):",
        image: "img/image35.jpg",
        opts: [
            "6: Phloem, 7: Xylem",
            "6: Xylem, 7: Phloem",
            "6: Cortex, 7: Pith",
            "6: Epidermis, 7: Collenchyma"
        ],
        correct: 0,
        hint: "6 is Phloem (outer) and 7 is Xylem (inner)."
    },

    // -------------------------------------------------------------------------
    // 36 - T.S. of Mentha Stem (B&W detailed)
    // -------------------------------------------------------------------------
    {
        q: "In this B&W T.S. of Mentha Stem (Image 36), identify label (1):",
        image: "img/image36.jpg",
        opts: ["Epidermis", "Collenchyma", "Pith", "Parenchyma"],
        correct: 0,
        hint: "Label 1 indicates Epidermis."
    },
    {
        q: "In this B&W T.S. of Mentha Stem (Image 36), identify label (2):",
        image: "img/image36.jpg",
        opts: ["Collenchyma", "Epidermis", "Parenchyma", "Xylem"],
        correct: 0,
        hint: "Label 2 indicates Collenchyma at the corner."
    },
    {
        q: "In this B&W T.S. of Mentha Stem (Image 36), identify label (3):",
        image: "img/image36.jpg",
        opts: ["Pith", "Epidermis", "Collenchyma", "Phloem"],
        correct: 0,
        hint: "Label 3 points to the central Pith."
    },
    {
        q: "In this B&W T.S. of Mentha Stem (Image 36), identify label (4):",
        image: "img/image36.jpg",
        opts: ["Parenchyma", "Phloem", "Xylem", "Epidermis"],
        correct: 0,
        hint: "Label 4 indicates cortical Parenchyma."
    },
    {
        q: "In this B&W T.S. of Mentha Stem (Image 36), identify labels (5 & 6):",
        image: "img/image36.jpg",
        opts: [
            "5: Phloem, 6: Xylem",
            "5: Xylem, 6: Phloem",
            "5: Pith, 6: Cortex",
            "5: Epidermis, 6: Collenchyma"
        ],
        correct: 0,
        hint: "Label 5 is Phloem and 6 is Xylem."
    },

    // -------------------------------------------------------------------------
    // 37 - Vinca Stem (Diagram)
    // -------------------------------------------------------------------------
    {
        q: "In this T.S. diagram of Vinca Stem (Image 37), identify labels (1, 2, 3):",
        image: "img/image37.jpg",
        opts: [
            "1: Epidermis, 2: Collenchyma, 3: Parenchyma",
            "1: Cork, 2: Cortex, 3: Phloem",
            "1: Pericycle, 2: Phloem, 3: Xylem",
            "1: Epidermis, 2: Parenchyma, 3: Pith"
        ],
        correct: 0,
        hint: "The outer layers are 1: Epidermis, 2: Collenchyma, 3: Parenchyma."
    },
    {
        q: "In this T.S. diagram of Vinca Stem (Image 37), identify labels (4 & 5):",
        image: "img/image37.jpg",
        opts: [
            "4: Pericycle, 5: Phloem fibers (pericyclic fibers)",
            "4: Cork, 5: Cortex",
            "4: Xylem, 5: Pith",
            "4: Cambium, 5: Endodermis"
        ],
        correct: 0,
        hint: "Label 4 is Pericycle, 5 is Phloem fibers (pericyclic fibers)."
    },
    {
        q: "In this T.S. diagram of Vinca Stem (Image 37), identify labels (6, 7, 8):",
        image: "img/image37.jpg",
        opts: [
            "6: Phloem, 7: Cambium, 8: Xylem",
            "6: Xylem, 7: Cambium, 8: Phloem",
            "6: Pith, 7: Xylem, 8: Phloem",
            "6: Collenchyma, 7: Parenchyma, 8: Pericycle"
        ],
        correct: 0,
        hint: "6: Phloem, 7: Cambium, 8: Xylem."
    },
    {
        q: "In this T.S. diagram of Vinca Stem (Image 37), identify label (9):",
        image: "img/image37.jpg",
        opts: ["Pith", "Xylem", "Cambium", "Phloem"],
        correct: 0,
        hint: "Label 9 is Pith."
    },
    {
        q: "In this T.S. diagram of Vinca Stem (Image 37), what is the key diagnostic structure labeled (10)?",
        image: "img/image37.jpg",
        opts: [
            "Premedullary phloem (Perimedullary phloem)",
            "Secretory canals",
            "Medullary rays",
            "Endodermis"
        ],
        correct: 0,
        hint: "Label 10 represents Premedullary phloem (internal/intraxylary phloem), diagnostic of Apocynaceae."
    },
    {
        q: "This diagram (Image 37) represents the T.S. of:",
        image: "img/image37.jpg",
        opts: [
            "Vinca - Stem",
            "Mentha - Stem",
            "Cascara - Bark",
            "Cinchona - Bark"
        ],
        correct: 0,
        hint: "Image 37 is the T.S. diagram of Vinca Stem."
    },

    // -------------------------------------------------------------------------
    // 38 - Vinca Stem (Detailed Photomicrograph)
    // -------------------------------------------------------------------------
    {
        q: "In this detailed section of Vinca Stem (Image 38), identify labels (1, 2, 3):",
        image: "img/image38.jpg",
        opts: [
            "1: Epidermis, 2: Collenchyma, 3: Parenchyma",
            "1: Cork, 2: Phelloderm, 3: Cortex",
            "1: Cuticle, 2: Phloem, 3: Xylem",
            "1: Pericycle, 2: Fibers, 3: Pith"
        ],
        correct: 0,
        hint: "1: Epidermis, 2: Collenchyma, 3: Parenchyma."
    },
    {
        q: "In this detailed section of Vinca Stem (Image 38), identify label (4):",
        image: "img/image38.jpg",
        opts: [
            "Pericyclic fibers",
            "Phloem",
            "Xylem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 4 points to isolated groups of Pericyclic fibers."
    },
    {
        q: "In this detailed section of Vinca Stem (Image 38), identify labels (5 & 6):",
        image: "img/image38.jpg",
        opts: [
            "5: Phloem, 6: Xylem",
            "5: Xylem, 6: Phloem",
            "5: Pith, 6: Xylem",
            "5: Fibers, 6: Pith"
        ],
        correct: 0,
        hint: "5 is Phloem and 6 is Xylem."
    },
    {
        q: "In this detailed section of Vinca Stem (Image 38), identify label (7):",
        image: "img/image38.jpg",
        opts: ["Pith", "Pericycle", "Xylem", "Epidermis"],
        correct: 0,
        hint: "Label 7 points to Pith."
    },
    {
        q: "This anatomical photograph (Image 38) represents:",
        image: "img/image38.jpg",
        opts: [
            "T.S. of Vinca Stem",
            "T.S. of Mentha Stem",
            "T.S. of Cinnamon Bark",
            "T.S. of Cascara Bark"
        ],
        correct: 0,
        hint: "Image 38 is the T.S. of Vinca Stem."
    }
];