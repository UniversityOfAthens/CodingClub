// Expects input in format: xxx_xxx_xxxx.md (markdown file name)
export default function formatFileName(input) {
  let withoutExtension = input.slice(0, -3);

  // Replace underscores with spaces
  let formattedString = withoutExtension.replace(/_/g, " ");
  let capitalizedString = formattedString.replace(
    /(^|[^A-Za-zΑ-ωά-ώΑ-Ω\d])([Α-ωά-ώΑ-Ω])/g,
    (_, boundary, char) => boundary + char.toUpperCase()
  );

  return capitalizedString;
}
