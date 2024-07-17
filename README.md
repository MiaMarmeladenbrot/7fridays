# Aufgabe
Die Aufgabe besteht darin einen kleinen Shop zu bauen. Dieser soll folgende Seiten beinhalten:

- Übersichtsseite der Produkte
- Produktdetailseite
- Warenkorbseite

Auf der Übersichtsseite werden alle Produkte nach Preis sortiert angezeigt. Klickt man auf ein Produkt, gelangt man auf dessen Detailseite.

Die Detailseite zeigt den Namen und den Preis des Produkts an. Des Weiteren gibt es einen Button um es dem Warenkorb hinzuzufügen. Jedes Produkt kann mehrmals dem Warenkorb hinzugefügt werden.

Auf jeder Seite ist ein Warenkorb-Widget sichtbar, welches den aktuellen Gesamtpreis anzeigt. Beim Klick auf das Widget gelangt man auf die Warenkorbseite.

Die Warenkorbseite zeigt alle Produkte an, die sich im Warenkorb befinden. Einzelne Produkte können aus dem Warenkorb entfernt werden.

## Hinweise
- Umsetzung Frontend mit React und Typescript
- Umsetzung Backend mit Typescript und GraphQL
- Styling mit Tailwind nach eigenem Ermessen
- Fokus auf funktionale Schreibweise und Modularität des Codes
- Hinzufügen von Tests für die Basisfunktionalitäten
- Du kannst products.json als Datengrundlage nehmen

# Backend
1. GraphQL Server aufsetzen
    - get all products ✅
    - get one product ✅
    - get all cartProducts, totalPrice ✅
    - add to cart ✅
    - remove from cart ✅
2. products.json als Datenquelle ✅
3. V2.0: Daten in MongoDB speichern

# Frontend
1. drei Seiten: 
    - Übersichtsseite der Produkte: alle Produkte nach Preis sortiert ✅
    - Produktdetailseite: Namen und den Preis des Produkts plus Button für Warenkorb ✅
    - Warenkorbseite: alle Produkte im Warenkorb, Gesamtpreis, delete-Option ✅
2. Komponenten:
    - Warenkorb-Widget mit Gesamtpreis ✅
    - Warenkorb-Button ✅
    - Hero ✅
3. Styling mit tailwind ✅

# Weiteres
- Tests für die Basisfunktionalitäten