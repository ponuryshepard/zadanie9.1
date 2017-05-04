function getTriangleArea(a, h) {
	
	if ( (a > 0) && (h > 0) ) {
		
		var wynik = a*h/2;
		
		return wynik;

	} else {
	
		alert('Nieprawid³owe dane');
	
	}

}



var triangle1Area = getTriangleArea(10, 15);

var triangle2Area = getTriangleArea(0, 12);

var triangle3Area = getTriangleArea(2, 8);
