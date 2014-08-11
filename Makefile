#
#  Makefile
#

help:
	@echo "Commands for working with this project."
	@echo
	@echo "make serve    Run the development server."
	@echo

serve:
	python -m http.server

deploy:
	git push -f origin gh-pages

.PHONY: help serve
