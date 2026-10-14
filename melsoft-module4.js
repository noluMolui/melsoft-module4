let attendees = [
  { name: "Lebo", age: 22, ticket: "General", hasTicket: true, checkedIn: false, spend: 350 },
  { name: "Aisha", age: 19, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 1200 },
  { name: "Thabo", age: 17, ticket: "General", hasTicket: true, checkedIn: false, spend: 250 },
  { name: "Naledi", age: 25, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 850 },
  { name: "Jason", age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
  { name: "Zanele", age: 20, ticket: "General", hasTicket: true, checkedIn: false, spend: 650 },
  { name: "Karabo", age: 16, ticket: "VIP", hasTicket: true, checkedIn: false, spend: 900 },
  { name: "Michael", age: 28, ticket: "General", hasTicket: true, checkedIn: false, spend: 450 }
];
// Challenge 2: Who Can Enter?
for (let attendee of attendees) {
  if (attendee.age >= 18 && attendee.hasTicket == true) {
    console.log(attendee.name + " -> ENTRY APPROVED");
  } else {
    if (attendee.age < 18) {
      console.log(attendee.name + " -> ENTRY DENIED: UNDER 18");
    } else {
      console.log(attendee.name + " -> ENTRY DENIED: NO VALID TICKET");
    }
  }
}
// Challenge 3: Access Zones
for (let i = 0; i < attendees.length; i++) {
  let current = attendees[i];
  let band = "";
  switch (current.ticket) {
    case "VIP":
      band = "GOLD WRISTBAND";
      break;
    case "General":
      band = "BLUE WRISTBAND";
      break;
    default:
      band = "UNKNOWN TICKET TYPE";
  }
  console.log(current.name + " Ticket: " + current.ticket + " Wristband: " + band);
}
// Challenge 4: VIP Lounge Security
for (let p of attendees) {
  if (p.hasTicket === true && p.ticket === "VIP" && p.age > 18) {
    console.log(p.name + " -> VIP LOUNGE APPROVED");
  } else {
    console.log(p.name + " -> VIP LOUNGE DENIED");
  }
}

// Challenge 5: Find a Person in the Queue
let searchName = "Zanele";
for (let person of attendees) {
  if (person.name == searchName) {
    console.log("ATTENDEE FOUND");
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Ticket: " + person.ticket);
    console.log("Valid Ticket: " + person.hasTicket);
    break;
  }
}
