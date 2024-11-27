const elements = [
  {
    symbol: "H",
    name: "Hydrogen",
    description: "Used in water and rocket fuel."
  },

  {
    symbol: "He",
    name: "Helium",
    description: "Found in balloons and cooling systems."
  },

  {
    symbol: "Li",
    name: "Lithium",
    description: "Used in rechargeable batteries."
  },

  {
    symbol: "Be",
    name: "Beryllium",
    description: "Used in aerospace materials."
  },

  {
    symbol: "B",
    name: "Boron",
    description: "Found in detergents and glassmaking."
  },

  {
    symbol: "C",
    name: "Carbon",
    description: "Essential for life; found in diamonds and graphite."
  },

  {
    symbol: "N",
    name: "Nitrogen",
    description: "Used in fertilizers and found in the atmosphere."
  },

  {
    symbol: "O",
    name: "Oxygen",
    description: "Vital for respiration and combustion."
  },

  {
    symbol: "F",
    name: "Fluorine",
    description: "Used in toothpaste and refrigeration."
  },

  {
    symbol: "Ne",
    name: "Neon",
    description: "Used in neon signs and lighting."
  },

  { symbol: "Na", name: "Sodium", description: "Found in table salt." },

  {
    symbol: "Mg",
    name: "Magnesium",
    description: "Used in lightweight alloys."
  },

  {
    symbol: "Al",
    name: "Aluminum",
    description: "Used in packaging and construction."
  },

  {
    symbol: "Si",
    name: "Silicon",
    description: "Found in electronics and glass."
  },

  {
    symbol: "P",
    name: "Phosphorus",
    description: "Used in fertilizers and fireworks."
  },

  {
    symbol: "S",
    name: "Sulfur",
    description: "Found in matches and sulfuric acid."
  },

  {
    symbol: "Cl",
    name: "Chlorine",
    description: "Used in disinfectants and PVC production."
  },

  { symbol: "Ar", name: "Argon", description: "Used in light bulbs." },

  {
    symbol: "K",
    name: "Potassium",
    description: "Essential for plant growth."
  },

  { symbol: "Ca", name: "Calcium", description: "Found in bones and cement." },

  {
    symbol: "Sc",
    name: "Scandium",
    description: "Used in aerospace components."
  },

  {
    symbol: "Ti",
    name: "Titanium",
    description: "Used in implants and aircraft."
  },

  { symbol: "V", name: "Vanadium", description: "Used in steel alloys." },

  { symbol: "Cr", name: "Chromium", description: "Used in stainless steel." },

  { symbol: "Mn", name: "Manganese", description: "Used in steel production." },

  {
    symbol: "Fe",
    name: "Iron",
    description: "Used in construction and tools."
  },

  {
    symbol: "Co",
    name: "Cobalt",
    description: "Found in batteries and magnets."
  },

  {
    symbol: "Ni",
    name: "Nickel",
    description: "Used in coins and stainless steel."
  },

  { symbol: "Cu", name: "Copper", description: "Found in wiring and coins." },

  {
    symbol: "Zn",
    name: "Zinc",
    description: "Used in galvanizing and alloys."
  },

  { symbol: "Ga", name: "Gallium", description: "Used in semiconductors." },

  { symbol: "Ge", name: "Germanium", description: "Used in fiber optics." },

  {
    symbol: "As",
    name: "Arsenic",
    description: "Used in semiconductors and pesticides."
  },

  {
    symbol: "Se",
    name: "Selenium",
    description: "Found in photocopiers and glass."
  },

  { symbol: "Br", name: "Bromine", description: "Used in flame retardants." },

  {
    symbol: "Kr",
    name: "Krypton",
    description: "Used in lighting and photography."
  }

  // Add remaining elements here (up to 118)
];

const tableContainer = document.querySelector(".periodic-table");

const elementName = document.getElementById("element-name");

const elementDescription = document.getElementById("element-description");

// Create the periodic table

elements.forEach((element) => {
  const elementDiv = document.createElement("div");

  elementDiv.className = "element";

  elementDiv.textContent = element.symbol;

  elementDiv.addEventListener("click", () => {
    elementName.textContent = `${element.name} (${element.symbol})`;

    elementDescription.textContent = element.description;
  });

  tableContainer.appendChild(elementDiv);
});
