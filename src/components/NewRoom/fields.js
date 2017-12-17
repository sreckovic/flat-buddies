const fields = {
  type: [
    { value: "0", label: "Type of property" },
    { value: "house", label: "House" },
    { value: "flat", label: "Flat" }
  ],
  bedrooms: [
    { value: "0", label: "Total bedrooms" },
    { value: "2", label: "2 bed property" },
    { value: "3", label: "3 bed property" },
    { value: "4", label: "4 bed property" },
    { value: "5", label: "5 bed property" },
    { value: "6", label: "6+ bed property" }
  ],
  bathrooms: [
    { value: "0", label: "Total bathrooms" },
    { value: "1", label: "1 bathroom" },
    { value: "2", label: "2 bathrooms" },
    { value: "3", label: "3 bathrooms" },
    { value: "4", label: "4+ bathrooms" }
  ],
  persons: [
    { value: "0", label: "Total persons" },
    { value: "1", label: "1 person" },
    { value: "2", label: "2 persons" },
    { value: "3", label: "3 persons" },
    { value: "4", label: "4 persons" },
    { value: "5", label: "5 persons" },
    { value: "6", label: "6 persons" },
    { value: "7", label: "7+ persons" }
  ],
  internet: [
    { value: "0", label: "Is internet avaiable?" },
    { value: "unlimited", label: "Unlimited included in rent" },
    { value: "included", label: "Included in rent" },
    {
      value: "avaiable",
      label: "Avaiable but not included in rent"
    },
    { value: "not avaiable", label: "Not avaiable" }
  ],
  parking: [
    { value: "0", label: "Is parking avaiable?" },
    { value: "no", label: "No parking" },
    { value: "off-street", label: "Off-street parking" },
    { value: "on-street", label: "On-street parking" }
  ],
  bills: [
    { value: "0", label: "Bills are" },
    { value: "excluded", label: "Additional to the rent" },
    { value: "included", label: "Included in the rent" },
    {
      value: "some",
      label: "Some are included in rent"
    }
  ],
  bond: [
    { value: "0", label: "Bond" },
    { value: "0", label: "No security bond" },
    { value: "1", label: "One week rent" },
    { value: "2", label: "Two weeks rent" },
    { value: "3", label: "Three weeks rent" },
    { value: "4", label: "Four weeks rent" }
  ],
  roomType: [
    { value: "0", label: "Room type" },
    { value: "private", label: "Private" },
    { value: "shared", label: "Room shared with others" }
  ],
  furnishings: [
    { value: "0", label: "Furnishings" },
    { value: "furnished", label: "Furnished" },
    { value: "unfurnished", label: "Unfurnished" },
    { value: "flexible", label: "Flexible with furnishings" }
  ],
  bathroomType: [
    { value: "0", label: "Bathroom type" },
    { value: "shared", label: "Shared bathroom" },
    { value: "own", label: "Own bathroom" },
    { value: "ensuite", label: "Ensuite bathroom" }
  ],
  gender: [
    { value: "0", label: "Preferred gender" },
    { value: "all", label: "Anyone welcome" },
    { value: "females", label: "Females" },
    { value: "anyone", label: "Females & Males (no couples)" },
    { value: "couples", label: "Couples" }
  ],
  min: [
    { value: "0", label: "No min stay" },
    { value: "1", label: "1 week min" },
    { value: "2", label: "2 weeks min" },
    { value: "3", label: "3 weeks min" },
    { value: "4", label: "4 weeks min" },
    { value: "8", label: "2 months min" },
    { value: "12", label: "3 months min" },
    { value: "16", label: "4 months min" },
    { value: "20", label: "5 months min" },
    { value: "24", label: "6 months min" },
    { value: "48", label: "1 year min" }
  ],
  max: [
    { value: "0", label: "No max stay" },
    { value: "1", label: "1 week max" },
    { value: "2", label: "2 weeks max" },
    { value: "3", label: "3 weeks max" },
    { value: "4", label: "4 weeks max" },
    { value: "8", label: "2 months max" },
    { value: "12", label: "3 months max" },
    { value: "16", label: "4 months max" },
    { value: "20", label: "5 months max" },
    { value: "24", label: "6 months max" },
    { value: "48", label: "1 year max" }
  ]
};

export default fields;
