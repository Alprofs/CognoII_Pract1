/* ==========================================================================
   PART 1: ELEMENTS & POWDER IDENTIFICATION
   ========================================================================== */
const elementsQuizData = [
    // --- Cascara Bark (Specimens 1 - 5) ---
    {
        q: "This Element is ......... .",
        image: "img/image1.jpg",
        opts: [
            "Prisms and cluster crystals of Ca.OX",
            "Acicular crystals of Ca.OX",
            "Sandy crystals of Ca.OX",
            "Conglomerates of Ca.OX"
        ],
        correct: 0,
        hint: "Glycerin mount showing both prisms and cluster crystals of Ca.Ox."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image1.jpg",
        opts: [
            "Cascara bark",
            "Cinnamon bark",
            "Cinchona bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "The co-occurrence of prisms and cluster crystals is diagnostic for Cascara bark."
    },
    {
        q: "This Element is ......... .",
        image: "img/image2.jpg",
        opts: [
            "Starch grains",
            "Sandy crystals",
            "Oil droplets",
            "Pollen grains"
        ],
        correct: 0,
        hint: "Starch grains observed under Glycerin mount."
    },
    {
        q: "This Element is ......... .",
        image: "img/image3.jpg",
        opts: [
            "Crystal sheath",
            "Yellow fusiform phloem fiber",
            "Transparent slender phloem fiber",
            "Balloon-like pericyclic fiber"
        ],
        correct: 0,
        hint: "Crystal sheath: phloem fibers encased in a sheath of monoclinic Ca.Ox prisms."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image3.jpg",
        opts: [
            "Cascara bark",
            "Cinnamon bark",
            "Cinchona bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Crystal sheath is the chief diagnostic element of Cascara bark."
    },
    {
        q: "This Element is ......... .",
        image: "img/image4.jpg",
        opts: [
            "Cork",
            "Xylem vessels",
            "Phloem parenchyma",
            "Collenchyma"
        ],
        correct: 0,
        hint: "Polygonal cork cells observed in surface view with brownish contents."
    },
    {
        q: "This Element is ......... .",
        image: "img/image5.jpg",
        opts: [
            "Rounded to elongated groups of Sclereids",
            "Horse shoe sclereids",
            "Evenly thickening isolated sclereids",
            "Balloon-like fibers"
        ],
        correct: 0,
        hint: "Large compact groups of stone cells (sclereids) found in Cascara bark."
    },
    {
        q: "This element is completely ABSENT in Cascara bark powder: ......... .",
        image: null,
        opts: [
            "Xylem vessels",
            "Cork cells",
            "Starch grains",
            "Sclereids"
        ],
        correct: 0,
        hint: "Barks lack xylem vessels because they consist only of tissues outside the vascular cambium."
    },
    {
        q: "The powder of this medicinal plant could be tested by: ......... .",
        image: "img/image3.jpg",
        opts: [
            "Borntrager's and Modified Borntrager's tests",
            "Ferric chloride test",
            "Dilute sulfuric acid fluorescence test",
            "Mayer's reagent test"
        ],
        correct: 0,
        hint: "Cascara bark contains anthraquinone derivatives detected by Borntrager's tests."
    },
    {
        q: "In Borntrager's test, shaking the organic solvent extract with NH4OH or KOH yields: ......... .",
        image: null,
        opts: [
            "Rose Red colour in alkaline layer",
            "Blue fluorescence",
            "White creamy precipitate",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Anthraquinones form a Rose Red color in the aqueous alkaline layer."
    },
    {
        q: "Boiling the powder with dilute HCl and FeCl3 in Modified Borntrager's test is used to detect: ......... .",
        image: null,
        opts: [
            "C-Glycosides",
            "Alkaloids",
            "Volatile oils",
            "Mucilage"
        ],
        correct: 0,
        hint: "FeCl3 causes oxidative hydrolysis of resistant C-glycosides (Cascarosides)."
    },

    // --- Cinnamon Bark (Specimens 6 - 11) ---
    {
        q: "This Element is ......... .",
        image: "img/image6.jpg",
        opts: [
            "Starch grains",
            "Sandy crystals",
            "Cluster crystals",
            "Pollen grains"
        ],
        correct: 0,
        hint: "Starch grains in Glycerin mount of Cinnamon bark."
    },
    {
        q: "This Element is ......... .",
        image: "img/image7.jpg",
        opts: [
            "Transparent Slender Phloem Fiber",
            "Yellow Fusiform Phloem Fiber",
            "Crystal sheath",
            "Balloon-like pericyclic fiber"
        ],
        correct: 0,
        hint: "Very narrow, colorless, transparent slender phloem fiber."
    },
    {
        q: "This element is characteristic for: ......... .",
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
        q: "This Element is ......... .",
        image: "img/image8.jpg",
        opts: [
            "Acicular crystals of Ca.OX",
            "Sandy crystals of Ca.OX",
            "Prisms and clusters of Ca.OX",
            "Conglomerates of Ca.OX"
        ],
        correct: 0,
        hint: "Fine needle-shaped (acicular) crystals of calcium oxalate."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image8.jpg",
        opts: [
            "Cinnamon bark",
            "Cascara bark",
            "Cinchona bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "Acicular crystals of Ca.Ox are diagnostic for Cinnamon bark."
    },
    {
        q: "This Element is ......... .",
        image: "img/image9.jpg",
        opts: [
            "Oil cells",
            "Mucilage cells",
            "Labiaceous hair",
            "Endodermal cells"
        ],
        correct: 0,
        hint: "Isolated large secretory oil cells containing volatile oil."
    },
    {
        q: "This Element is ......... .",
        image: "img/image10.jpg",
        opts: [
            "Evenly Thickening Sclereids",
            "Horse shoe Sclereids",
            "Crystal sheath",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Sclereids with uniformly thickened lignified walls on all sides."
    },
    {
        q: "This Element is ......... .",
        image: "img/image11.jpg",
        opts: [
            "Horse shoe Sclereids",
            "Evenly Thickening Sclereids",
            "Cork cells",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Sclereids thickened on three sides with the outer wall remaining thin."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image11.jpg",
        opts: [
            "Cinnamon bark",
            "Cascara bark",
            "Cinchona bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Horse shoe sclereids are diagnostic for Cinnamon bark."
    },
    {
        q: "This element is completely ABSENT in official Cinnamon bark powder: ......... .",
        image: null,
        opts: [
            "Cork and Xylem vessels",
            "Sclereids and Fibers",
            "Starch grains and Oil cells",
            "Acicular crystals"
        ],
        correct: 0,
        hint: "Official Cinnamon is a peeled bark (No Cork) and as a bark it lacks Xylem vessels."
    },
    {
        q: "Volatile oil in 5 ml alcohol of this plant treated with Ferric chloride yields: ......... .",
        image: "img/image7.jpg",
        opts: [
            "Pale green colour",
            "Brown colour",
            "Blue colour",
            "Rose Red colour"
        ],
        correct: 0,
        hint: "Slide 7: Cinnamon volatile oil in alcohol + FeCl3 gives a pale green colour."
    },
    {
        q: "Cinnamic aldehyde treated with Ferric chloride yields: ......... .",
        image: null,
        opts: [
            "Brown colour",
            "Pale green colour",
            "Blue colour",
            "White precipitate"
        ],
        correct: 0,
        hint: "Slide 7: Cinnamic aldehyde + FeCl3 gives a brown colour."
    },
    {
        q: "Eugenol treated with Ferric chloride yields: ......... .",
        image: null,
        opts: [
            "Blue colour",
            "Brown colour",
            "Pale green colour",
            "Rose Red colour"
        ],
        correct: 0,
        hint: "Slide 7: Eugenol reacts with FeCl3 to yield a blue colour."
    },
    {
        q: "Alcoholic extract of Cinnamon bark treated with Phenylhydrazine hydrochloride yields: ......... .",
        image: null,
        opts: [
            "Red colour",
            "Blue fluorescence",
            "White creamy precipitate",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Slide 7: Phenylhydrazine hydrochloride produces a Red colour (phenylhydrazone crystals)."
    },

    // --- Cinchona Bark (Specimens 12 - 15) ---
    {
        q: "This Element is ......... .",
        image: "img/image12.jpg",
        opts: [
            "Yellow Fusiform Phloem Fiber",
            "Transparent Slender Phloem Fiber",
            "Crystal sheath",
            "Balloon-like pericyclic fiber"
        ],
        correct: 0,
        hint: "Very large, yellow, spindle-shaped phloem fibers with striated walls and funnel pits."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image12.jpg",
        opts: [
            "Cinchona bark",
            "Cascara bark",
            "Cinnamon bark",
            "Mentha herb"
        ],
        correct: 0,
        hint: "Yellow fusiform phloem fiber is diagnostic for Cinchona bark."
    },
    {
        q: "This Element is ......... .",
        image: "img/image13.jpg",
        opts: [
            "Sandy crystal of Ca.ox",
            "Acicular crystals of Ca.ox",
            "Prisms and cluster crystals",
            "Conglomerates of Ca.ox"
        ],
        correct: 0,
        hint: "Microcrystals filling parenchymatous idioblasts (crystal sand)."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image13.jpg",
        opts: [
            "Cinchona bark",
            "Cascara bark",
            "Cinnamon bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Sandy crystals of Ca.Ox are diagnostic for Cinchona bark."
    },
    {
        q: "This Element is ......... .",
        image: "img/image14.jpg",
        opts: [
            "Starch grains",
            "Sandy crystals",
            "Oil cells",
            "Pollen grains"
        ],
        correct: 0,
        hint: "Starch grains in Cinchona bark parenchyma."
    },
    {
        q: "This Element is ......... .",
        image: "img/image15.jpg",
        opts: [
            "Phloem parenchyma",
            "Xylem vessels",
            "Cork cells",
            "Collenchyma"
        ],
        correct: 0,
        hint: "Axially elongated phloem parenchyma cells in Cinchona bark."
    },
    {
        q: "This element is completely ABSENT in Cinchona bark powder: ......... .",
        image: null,
        opts: [
            "Xylem vessels",
            "Phloem fibers",
            "Cork cells",
            "Sandy crystals"
        ],
        correct: 0,
        hint: "Like all bark drugs, Cinchona bark contains No Xylem vessels."
    },
    {
        q: "The powder of this plant treated with Dil. H2SO4 yields: ......... .",
        image: "img/image12.jpg",
        opts: [
            "Blue fluorescence",
            "Rose Red colour",
            "White creamy precipitate",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Slide 10: Specific test for Quinine produces a vivid Blue fluorescence."
    },
    {
        q: "Acidulated extract of Cinchona bark treated with Mayer's Reagent yields: ......... .",
        image: null,
        opts: [
            "White Creamy PPT",
            "Blue fluorescence",
            "Rose Red colour",
            "Pale green colour"
        ],
        correct: 0,
        hint: "Slide 10: Mayer's reagent gives a White Creamy Precipitate with alkaloids."
    },

    // --- Mentha Herb (Specimens 16 - 23) ---
    {
        q: "This Element is ......... .",
        image: "img/image16.jpg",
        opts: [
            "Non-glandular hair",
            "Labiaceous hair",
            "Capitate hair",
            "Cottony hair"
        ],
        correct: 0,
        hint: "Multicellular uniseriate hair with pointed apex and striated cuticle."
    },
    {
        q: "This Element is ......... .",
        image: "img/image17.jpg",
        opts: [
            "Non-glandular hair",
            "S-shaped hair",
            "Cottony hair",
            "Pericyclic fiber"
        ],
        correct: 0,
        hint: "Uniseriate non-glandular trichome showing distinct cuticular striations."
    },
    {
        q: "This Element is ......... .",
        image: "img/image18.jpg",
        opts: [
            "Labiaceous hair",
            "Capitate hair",
            "Non-glandular hair",
            "Diacytic stomata"
        ],
        correct: 0,
        hint: "Peltate glandular hair with a short stalk and an 8-celled radiating head."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image18.jpg",
        opts: [
            "Mentha herb",
            "Cascara bark",
            "Cinchona bark",
            "Vinca herb"
        ],
        correct: 0,
        hint: "Labiaceous hair is the diagnostic key element of Mentha (peppermint)."
    },
    {
        q: "This Element is ......... .",
        image: "img/image19.jpg",
        opts: [
            "Epidermal cells from the stem",
            "Cork cells",
            "Phloem parenchyma",
            "Endodermal cells"
        ],
        correct: 0,
        hint: "Axially elongated epidermal cells derived from the stem of Mentha."
    },
    {
        q: "This Element is ......... .",
        image: "img/image20.jpg",
        opts: [
            "Labiaceous hair",
            "Capitate hair",
            "Diacytic stomata",
            "S-shaped hair"
        ],
        correct: 0,
        hint: "Surface view of a Labiaceous hair showing the circular 8-celled head."
    },
    {
        q: "This Element is ......... .",
        image: "img/image21.jpg",
        opts: [
            "Xylem Vessel",
            "Phloem fibers",
            "Pericyclic fibers",
            "Crystal sheath"
        ],
        correct: 0,
        hint: "Conducting xylem elements showing spiral and annular lignified wall thickenings."
    },
    {
        q: "This Element is ......... .",
        image: "img/image22.jpg",
        opts: [
            "Diacytic Stomata",
            "Anomocytic Stomata",
            "Paracytic Stomata",
            "Anisocytic Stomata"
        ],
        correct: 0,
        hint: "Stoma enclosed by two subsidiary cells whose mutual wall is perpendicular to the pore."
    },
    {
        q: "This Element is ......... .",
        image: "img/image23.jpg",
        opts: [
            "Capitate hair",
            "Labiaceous hair",
            "Cottony hair",
            "Non-glandular hair"
        ],
        correct: 0,
        hint: "Small glandular trichome with a unicellular stalk and a rounded head."
    },
    {
        q: "Which elements are completely ABSENT in Mentha herb powder: ......... .",
        image: null,
        opts: [
            "Starch grains, Ca.OX crystals, and Cork",
            "Xylem vessels and Stomata",
            "Hairs and Cuticle",
            "Epidermal cells"
        ],
        correct: 0,
        hint: "Slide 11 & 12: Mentha powder contains No Starch grains, No Ca.Ox, and No Cork."
    },
    {
        q: "Peppermint oil heated gently with glacial acetic acid and 0.3% nitric acid yields: ......... .",
        image: null,
        opts: [
            "Blue colour turning to golden yellow",
            "Rose Red colour in alkaline layer",
            "White creamy precipitate",
            "Blue fluorescence"
        ],
        correct: 0,
        hint: "Slide 13: Nitric acid test produces a blue color that turns golden yellow upon heating."
    },

    // --- Vinca Herb (Specimens 24 - 29) ---
    {
        q: "Physical properties of Vinca Herb powder are: ......... .",
        image: null,
        opts: [
            "Colour: Grayish green, Odour: Disagreeable, Taste: Bitter",
            "Colour: Yellowish, Odour: Agreeable aromatic, Taste: Pungent",
            "Colour: Reddish brown, Odour: Aromatic, Taste: Sweet",
            "Colour: White, Odour: Odourless, Taste: Bland"
        ],
        correct: 0,
        hint: "Slide 14: Vinca Herb powder is Grayish green, Disagreeable in odour, and Bitter in taste."
    },
    {
        q: "This Element is ......... .",
        image: "img/image24.jpg",
        opts: [
            "Non-glandular hairs of stem",
            "Cottony hair",
            "Labiaceous hair",
            "Capitate hair"
        ],
        correct: 0,
        hint: "Short conical non-glandular trichomes found on the stem of Vinca."
    },
    {
        q: "This Element is ......... .",
        image: "img/image25.jpg",
        opts: [
            "Conglomerates of Ca. ox.",
            "Sandy crystals of Ca.ox",
            "Acicular crystals of Ca.ox",
            "Crystal sheath"
        ],
        correct: 0,
        hint: "Aggregated cluster crystal masses (conglomerates) of calcium oxalate."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image25.jpg",
        opts: [
            "Vinca Herb",
            "Mentha Herb",
            "Cascara bark",
            "Cinchona bark"
        ],
        correct: 0,
        hint: "Conglomerates of Ca.Ox are characteristic for Vinca Herb."
    },
    {
        q: "This Element is ......... .",
        image: "img/image26.jpg",
        opts: [
            "S- Shaped hair",
            "Cottony hair",
            "Labiaceous hair",
            "Capitate hair"
        ],
        correct: 0,
        hint: "Uniquely curved S-shaped non-glandular hair."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image27.jpg",
        opts: [
            "Vinca Herb",
            "Mentha Herb",
            "Cinnamon bark",
            "Cascara bark"
        ],
        correct: 0,
        hint: "S-shaped hairs are diagnostic for Vinca Herb."
    },
    {
        q: "This Element is ......... .",
        image: "img/image28.jpg",
        opts: [
            "Cottony hair",
            "S- Shaped hair",
            "Labiaceous hair",
            "Stem hair"
        ],
        correct: 0,
        hint: "Long, multi-cellular, articulated ribbon-like hair."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image28.jpg",
        opts: [
            "Vinca Herb",
            "Mentha Herb",
            "Cascara bark",
            "Cinchona bark"
        ],
        correct: 0,
        hint: "Cottony hairs are characteristic for Vinca Herb."
    },
    {
        q: "This Element is ......... .",
        image: "img/image29.jpg",
        opts: [
            "Unlignified balloon like pericyclic fibers",
            "Yellow fusiform phloem fiber",
            "Transparent slender phloem fiber",
            "Crystal sheath"
        ],
        correct: 0,
        hint: "Unlignified pericyclic fibers showing balloon-like swollen walls in KOH."
    },
    {
        q: "This element is characteristic for: ......... .",
        image: "img/image29.jpg",
        opts: [
            "Vinca Herb",
            "Cinnamon bark",
            "Cinchona bark",
            "Cascara bark"
        ],
        correct: 0,
        hint: "Unlignified balloon-like pericyclic fibers are the chief diagnostic element of Vinca Herb."
    },
    {
        q: "Which elements are completely ABSENT in Vinca herb powder: ......... .",
        image: null,
        opts: [
            "Starch grains and Cork",
            "Calcium oxalate crystals",
            "Xylem vessels",
            "Non-glandular hairs"
        ],
        correct: 0,
        hint: "Slide 15 & 16: Vinca herb lacks starch grains and cork."
    },
    {
        q: "The acidulated extract of this plant treated with Mayer's Reagent yields: ......... .",
        image: "img/image29.jpg",
        opts: [
            "White Creamy PPT",
            "Rose Red alkaline layer",
            "Blue fluorescence",
            "Golden yellow colour"
        ],
        correct: 0,
        hint: "Slide 17: Vinca alkaloids form a White Creamy Precipitate with Mayer's reagent."
    },

    // --- Ginger Rhizome (Slide 18) ---
    {
        q: "Physical properties of Ginger rhizome powder are: ......... .",
        image: null,
        opts: [
            "Colour: Yellowish, Odour: Agreeable aromatic, Taste: Pungent",
            "Colour: Grayish green, Odour: Disagreeable, Taste: Bitter",
            "Colour: Dark brown, Odour: Aromatic, Taste: Sweet",
            "Colour: White, Odour: Odourless, Taste: Bland"
        ],
        correct: 0,
        hint: "Slide 18: Ginger rhizome: Yellowish colour, agreeable aromatic odour, pungent taste."
    }
];

/* ==========================================================================
   PART 2: TRANSVERSE SECTIONS (T.S.)
   ========================================================================== */
const tsQuizData = [
    // --- Cascara Bark Diagram (Image 30) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image30.jpg",
        opts: [
            "Cascara bark",
            "Cinchona bark",
            "Cinnamon bark",
            "Mentha stem"
        ],
        correct: 0,
        hint: "Image 30 is the T.S. diagram of Cascara bark."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image30.jpg",
        opts: [
            "Cork",
            "Phelloderm",
            "Medullary rays",
            "Sclereides"
        ],
        correct: 0,
        hint: "Label 1 is Cork."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image30.jpg",
        opts: [
            "Phelloderm",
            "Cork",
            "Medullary rays",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 2 is Phelloderm."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image30.jpg",
        opts: [
            "Medullary rays",
            "Phelloderm",
            "Cork",
            "Sclereides"
        ],
        correct: 0,
        hint: "Label 3 is Medullary rays."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image30.jpg",
        opts: [
            "Sclereides",
            "Cork",
            "Phloem fibers",
            "Phelloderm"
        ],
        correct: 0,
        hint: "Label 4 indicates groups of Sclereides."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image30.jpg",
        opts: [
            "Phloem fibers surrounded with crystal prisms of Ca-ox",
            "Medullary rays",
            "Secretion canals",
            "Pericyclic fibers"
        ],
        correct: 0,
        hint: "Label 5 indicates Phloem fibers surrounded with crystal prisms of Ca-ox (crystal sheath)."
    },
    {
        q: "Type of ca. ox. in this plant is: ......... .",
        image: "img/image30.jpg",
        opts: [
            "Prisms and cluster crystals of Ca.OX",
            "Sandy crystals of Ca.OX",
            "Acicular crystals of Ca.OX",
            "Conglomerates of Ca.OX"
        ],
        correct: 0,
        hint: "Slide 2: Cascara contains prisms and cluster crystals of Ca.Ox."
    },
    {
        q: "Chemical test for this plant is: ......... .",
        image: "img/image30.jpg",
        opts: [
            "Borntrager's Test",
            "Quinine fluorescence test",
            "Ferric chloride test",
            "Mayer's test"
        ],
        correct: 0,
        hint: "Slide 4: Cascara bark is tested by Borntrager's test (Rose Red colour)."
    },
    {
        q: "Key element in the powder of this plant is: ......... .",
        image: "img/image30.jpg",
        opts: [
            "Crystal sheath",
            "Yellow fusiform phloem fiber",
            "Transparent slender phloem fiber",
            "Labiaceous hair"
        ],
        correct: 0,
        hint: "Crystal sheath is the chief diagnostic element of Cascara bark."
    },

    // --- Cinchona Bark Diagram (Image 31) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image31.jpg",
        opts: [
            "Cinchona bark",
            "Cascara bark",
            "Cinnamon bark",
            "Vinca stem"
        ],
        correct: 0,
        hint: "Image 31 is the T.S. diagram of Cinchona bark."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image31.jpg",
        opts: [
            "Cork",
            "Cortex",
            "Secretion Canals",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 1 is Cork."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image31.jpg",
        opts: [
            "Cortex",
            "Cork",
            "Phloem fibers",
            "Medullary rays"
        ],
        correct: 0,
        hint: "Label 2 is Cortex."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image31.jpg",
        opts: [
            "Secretion Canals",
            "Phloem fibers",
            "Cork",
            "Cortex"
        ],
        correct: 0,
        hint: "Label 3 indicates Secretion Canals."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image31.jpg",
        opts: [
            "Phloem fibers",
            "Medullary rays",
            "Cork",
            "Secretion canals"
        ],
        correct: 0,
        hint: "Label 4 indicates Phloem fibers."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image31.jpg",
        opts: [
            "Medullary rays",
            "Cortex",
            "Cork",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 5 indicates Medullary rays (M.R)."
    },
    {
        q: "Type of ca. ox. in this plant is: ......... .",
        image: "img/image31.jpg",
        opts: [
            "Sandy crystal of Ca.ox",
            "Acicular crystals of Ca.ox",
            "Prisms and cluster crystals",
            "Conglomerates of Ca.ox"
        ],
        correct: 0,
        hint: "Slide 8: Cinchona bark contains sandy crystals of Ca.Ox (crystal sand)."
    },
    {
        q: "Chemical test for this plant is: ......... .",
        image: "img/image31.jpg",
        opts: [
            "Dilute sulfuric acid test",
            "Borntrager's Test",
            "Ferric chloride test",
            "Glacial acetic acid and nitric acid test"
        ],
        correct: 0,
        hint: "Slide 10: Specific test for Quinine produces Blue fluorescence in dil. H2SO4."
    },
    {
        q: "Key element in the powder of this plant is: ......... .",
        image: "img/image31.jpg",
        opts: [
            "Yellow Fusiform Phloem Fiber",
            "Transparent Slender Phloem Fiber",
            "Crystal sheath",
            "Labiaceous hair"
        ],
        correct: 0,
        hint: "Yellow fusiform phloem fiber is the key element of Cinchona bark."
    },

    // --- Cinnamon Bark Diagram (Image 32) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image32.jpg",
        opts: [
            "Cinnamon bark",
            "Cascara bark",
            "Cinchona bark",
            "Mentha stem"
        ],
        correct: 0,
        hint: "Image 32 is the T.S. diagram of Cinnamon bark."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image32.jpg",
        opts: [
            "Pericyclic fibers",
            "Sclereid layer of pericycle",
            "Oil cells",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 1 indicates Pericyclic fibers."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image32.jpg",
        opts: [
            "Sclereid layer of pericycle",
            "Oil cells",
            "Medullary rays",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 2 is Sclereid layer of pericycle."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image32.jpg",
        opts: [
            "Oil cells",
            "Medullary rays",
            "Phloem fibers",
            "Pericyclic fibers"
        ],
        correct: 0,
        hint: "Label 3 indicates Oil cells."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image32.jpg",
        opts: [
            "Medullary rays",
            "Phloem fibers",
            "Oil cells",
            "Sclereids"
        ],
        correct: 0,
        hint: "Label 4 indicates Medullary rays."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image32.jpg",
        opts: [
            "Phloem fibers",
            "Oil cells",
            "Pericyclic fibers",
            "Sclereids"
        ],
        correct: 0,
        hint: "Label 5 indicates Phloem fibers."
    },
    {
        q: "Type of ca. ox. in this plant is: ......... .",
        image: "img/image32.jpg",
        opts: [
            "Acicular crystals of Ca.OX",
            "Sandy crystals of Ca.OX",
            "Prisms and cluster crystals",
            "Conglomerates of Ca.OX"
        ],
        correct: 0,
        hint: "Slide 5: Cinnamon bark contains acicular crystals of calcium oxalate."
    },
    {
        q: "Chemical test for this plant is: ......... .",
        image: "img/image32.jpg",
        opts: [
            "Ferric chloride test",
            "Borntrager's Test",
            "Quinine fluorescence test",
            "Mayer's test"
        ],
        correct: 0,
        hint: "Slide 7: Cinnamon volatile oil is tested with Ferric chloride."
    },
    {
        q: "Key element in the powder of this plant is: ......... .",
        image: "img/image32.jpg",
        opts: [
            "Transparent Slender Phloem Fiber",
            "Yellow Fusiform Phloem Fiber",
            "Crystal sheath",
            "Labiaceous hair"
        ],
        correct: 0,
        hint: "Transparent slender phloem fiber is the key element of Cinnamon bark."
    },

    // --- Detailed T.S. of Cinnamon Bark (Image 33) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image33.jpg",
        opts: [
            "Detailed T.S. of Cinnamon bark",
            "Detailed T.S. of Cascara bark",
            "Detailed T.S. of Cinchona bark",
            "Detailed T.S. of Mentha stem"
        ],
        correct: 0,
        hint: "Image 33 is the Detailed T.S. of Cinnamon bark."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Pericyclic fibers",
            "Sclereids",
            "Secondary phloem",
            "Mucilage cells"
        ],
        correct: 0,
        hint: "Label 1 points to Pericyclic fibers."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Sclereids",
            "Pericyclic fibers",
            "Secondary phloem",
            "Oil cells"
        ],
        correct: 0,
        hint: "Label 2 indicates Sclereids."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Secondary phloem",
            "Medullary rays",
            "Mucilage cells",
            "Pericyclic fibers"
        ],
        correct: 0,
        hint: "Label 3 indicates Secondary phloem."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Medullary rays",
            "Phloem fibers",
            "Mucilage cells",
            "Oil cells"
        ],
        correct: 0,
        hint: "Label 4 indicates Medullary rays."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Phloem fibers",
            "Mucilage cells",
            "Oil cells",
            "Sclereids"
        ],
        correct: 0,
        hint: "Label 5 indicates Phloem fibers."
    },
    {
        q: "Label 6 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Mucilage cells",
            "Oil cells",
            "Sclereids",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 6 indicates Mucilage cells."
    },
    {
        q: "Label 7 is ......... .",
        image: "img/image33.jpg",
        opts: [
            "Oil cells",
            "Mucilage cells",
            "Medullary rays",
            "Phloem fibers"
        ],
        correct: 0,
        hint: "Label 7 indicates Oil cells."
    },

    // --- Detailed Mentha Stem T.S. (Image 34) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image34.jpg",
        opts: [
            "Mentha stem",
            "Vinca stem",
            "Cascara bark",
            "Cinchona bark"
        ],
        correct: 0,
        hint: "Image 34 is the Detailed T.S. of Mentha Stem."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image34.jpg",
        opts: [
            "Collenchyma cells at corners",
            "Endodermis",
            "Phloem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 1 is Collenchyma cells at corners."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image34.jpg",
        opts: [
            "Endodermis",
            "Collenchyma",
            "Phloem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 2 is Endodermis."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image34.jpg",
        opts: [
            "Phloem",
            "Fibers",
            "Pith",
            "Endodermis"
        ],
        correct: 0,
        hint: "Label 3 is Phloem."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image34.jpg",
        opts: [
            "Fibers",
            "Phloem",
            "Collenchyma",
            "Pith"
        ],
        correct: 0,
        hint: "Label 4 indicates Fibers."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image34.jpg",
        opts: [
            "Pith",
            "Endodermis",
            "Phloem",
            "Collenchyma"
        ],
        correct: 0,
        hint: "Label 5 is Pith."
    },
    {
        q: "Type of ca. ox. in this plant is: ......... .",
        image: "img/image34.jpg",
        opts: [
            "Absent",
            "Sandy crystals",
            "Prisms and cluster crystals",
            "Conglomerates"
        ],
        correct: 0,
        hint: "Slide 11 & 12: Mentha contains NO Calcium Oxalate crystals."
    },
    {
        q: "Chemical test for this plant is: ......... .",
        image: "img/image34.jpg",
        opts: [
            "Glacial acetic acid and nitric acid test",
            "Borntrager's Test",
            "Quinine fluorescence test",
            "Ferric chloride test"
        ],
        correct: 0,
        hint: "Slide 13: Peppermint oil heated with glacial acetic and nitric acid gives blue turning to golden yellow."
    },
    {
        q: "Key element in the powder of this plant is: ......... .",
        image: "img/image34.jpg",
        opts: [
            "Labiaceous hair",
            "Crystal sheath",
            "Yellow fusiform phloem fiber",
            "Horse shoe sclereids"
        ],
        correct: 0,
        hint: "Labiaceous hair is the chief diagnostic element of Mentha."
    },

    // --- Mentha Stem Diagram (Image 35) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image35.jpg",
        opts: [
            "T.S. diagram of Mentha stem",
            "T.S. diagram of Vinca stem",
            "T.S. diagram of Cascara bark",
            "T.S. diagram of Cinchona bark"
        ],
        correct: 0,
        hint: "Image 35 is the T.S. diagram of Mentha Stem."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Epidermis",
            "Collenchyma",
            "Parenchymatous Cortex",
            "Pericycle"
        ],
        correct: 0,
        hint: "Label 1 is Epidermis."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Collenchyma",
            "Epidermis",
            "Endodermis",
            "Phloem"
        ],
        correct: 0,
        hint: "Label 2 is Collenchyma."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Parenchymatous Cortex",
            "Pericycle",
            "Endodermis",
            "Xylem"
        ],
        correct: 0,
        hint: "Label 3 is Parenchymatous Cortex."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Pericycle",
            "Endodermis",
            "Phloem",
            "Xylem"
        ],
        correct: 0,
        hint: "Label 4 is Pericycle."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Endodermis",
            "Pericycle",
            "Phloem",
            "Xylem"
        ],
        correct: 0,
        hint: "Label 5 is Endodermis."
    },
    {
        q: "Label 6 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Phloem",
            "Xylem",
            "Pith",
            "Cortex"
        ],
        correct: 0,
        hint: "Label 6 is Phloem."
    },
    {
        q: "Label 7 is ......... .",
        image: "img/image35.jpg",
        opts: [
            "Xylem",
            "Phloem",
            "Pith",
            "Pericycle"
        ],
        correct: 0,
        hint: "Label 7 is Xylem."
    },

    // --- Mentha Stem B&W T.S. (Image 36) ---
    {
        q: "Label 1 is ......... .",
        image: "img/image36.jpg",
        opts: [
            "Epidermis",
            "Collenchyma",
            "Pith",
            "Parenchyma"
        ],
        correct: 0,
        hint: "Label 1 is Epidermis."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image36.jpg",
        opts: [
            "Collenchyma",
            "Epidermis",
            "Parenchyma",
            "Xylem"
        ],
        correct: 0,
        hint: "Label 2 is Collenchyma."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image36.jpg",
        opts: [
            "Pith",
            "Epidermis",
            "Collenchyma",
            "Phloem"
        ],
        correct: 0,
        hint: "Label 3 is Pith."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image36.jpg",
        opts: [
            "Parenchyma",
            "Phloem",
            "Xylem",
            "Epidermis"
        ],
        correct: 0,
        hint: "Label 4 is Parenchyma."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image36.jpg",
        opts: [
            "Phloem",
            "Xylem",
            "Pith",
            "Collenchyma"
        ],
        correct: 0,
        hint: "Label 5 is Phloem."
    },
    {
        q: "Label 6 is ......... .",
        image: "img/image36.jpg",
        opts: [
            "Xylem",
            "Phloem",
            "Pith",
            "Epidermis"
        ],
        correct: 0,
        hint: "Label 6 is Xylem."
    },

    // --- Vinca Stem Diagram (Image 37) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image37.jpg",
        opts: [
            "Vinca stem",
            "Mentha stem",
            "Cascara bark",
            "Cinchona bark"
        ],
        correct: 0,
        hint: "Image 37 is the T.S. diagram of Vinca Stem."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Epidermis",
            "Collenchyma",
            "Parenchyma",
            "Pericycle"
        ],
        correct: 0,
        hint: "Label 1 is Epidermis."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Collenchyma",
            "Epidermis",
            "Parenchyma",
            "Pericycle"
        ],
        correct: 0,
        hint: "Label 2 is Collenchyma."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Parenchyma",
            "Collenchyma",
            "Pericycle",
            "Phloem"
        ],
        correct: 0,
        hint: "Label 3 is Parenchyma."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Pericycle",
            "Phloem fibers",
            "Phloem",
            "Cambium"
        ],
        correct: 0,
        hint: "Label 4 is Pericycle."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Phloem fibers",
            "Pericycle",
            "Phloem",
            "Xylem"
        ],
        correct: 0,
        hint: "Label 5 is Phloem fibers (P. fibers)."
    },
    {
        q: "Label 6 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Phloem",
            "Cambium",
            "Xylem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 6 is Phloem."
    },
    {
        q: "Label 7 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Cambium",
            "Phloem",
            "Xylem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 7 is Cambium."
    },
    {
        q: "Label 8 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Xylem",
            "Cambium",
            "Phloem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 8 is Xylem."
    },
    {
        q: "Label 9 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Pith",
            "Premedullary phloem",
            "Xylem",
            "Cambium"
        ],
        correct: 0,
        hint: "Label 9 is Pith."
    },
    {
        q: "Label 10 is ......... .",
        image: "img/image37.jpg",
        opts: [
            "Premedullary phloem",
            "Secretory canals",
            "Medullary rays",
            "Endodermis"
        ],
        correct: 0,
        hint: "Label 10 indicates Premedullary phloem (internal phloem)."
    },
    {
        q: "Type of ca. ox. in this plant is: ......... .",
        image: "img/image37.jpg",
        opts: [
            "Conglomerates of Ca. ox.",
            "Sandy crystals of Ca.ox",
            "Acicular crystals of Ca.ox",
            "Absent"
        ],
        correct: 0,
        hint: "Slide 15: Vinca contains conglomerates of calcium oxalate."
    },
    {
        q: "Chemical test for this plant is: ......... .",
        image: "img/image37.jpg",
        opts: [
            "Mayer's reagent test",
            "Borntrager's Test",
            "Dilute sulfuric acid test",
            "Ferric chloride test"
        ],
        correct: 0,
        hint: "Slide 17: Vinca alkaloids give a White Creamy PPT with Mayer's reagent."
    },
    {
        q: "Key element in the powder of this plant is: ......... .",
        image: "img/image37.jpg",
        opts: [
            "Unlignified balloon like pericyclic fibers",
            "Crystal sheath",
            "Yellow fusiform phloem fiber",
            "Horse shoe sclereids"
        ],
        correct: 0,
        hint: "Unlignified balloon-like pericyclic fibers are diagnostic for Vinca."
    },

    // --- Detailed Vinca Stem Photo (Image 38) ---
    {
        q: "This T.S. is in ......... .",
        image: "img/image38.jpg",
        opts: [
            "Vinca stem",
            "Mentha stem",
            "Cinnamon bark",
            "Cascara bark"
        ],
        correct: 0,
        hint: "Image 38 is the Detailed T.S. of Vinca Stem."
    },
    {
        q: "Label 1 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Epidermis",
            "Collenchyma",
            "Parenchyma",
            "Pericyclic fibers"
        ],
        correct: 0,
        hint: "Label 1 is Epidermis."
    },
    {
        q: "Label 2 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Collenchyma",
            "Epidermis",
            "Parenchyma",
            "Phloem"
        ],
        correct: 0,
        hint: "Label 2 is Collenchyma."
    },
    {
        q: "Label 3 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Parenchyma",
            "Pericyclic fibers",
            "Phloem",
            "Xylem"
        ],
        correct: 0,
        hint: "Label 3 is cortical Parenchyma."
    },
    {
        q: "Label 4 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Pericylic fibers",
            "Phloem",
            "Xylem",
            "Pith"
        ],
        correct: 0,
        hint: "Label 4 indicates Pericyclic fibers."
    },
    {
        q: "Label 5 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Phloem",
            "Xylem",
            "Pith",
            "Pericyclic fibers"
        ],
        correct: 0,
        hint: "Label 5 is Phloem."
    },
    {
        q: "Label 6 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Xylem",
            "Phloem",
            "Pith",
            "Collenchyma"
        ],
        correct: 0,
        hint: "Label 6 is Xylem."
    },
    {
        q: "Label 7 is ......... .",
        image: "img/image38.jpg",
        opts: [
            "Pith",
            "Xylem",
            "Phloem",
            "Epidermis"
        ],
        correct: 0,
        hint: "Label 7 points to the central Pith."
    }
];