rebuild:
	rm -rf docs/ build/
	npm run build
	touch build/.nojekyll
	echo "sethjrothschild.com" > build/CNAME
	mv build/ docs/