{% for p in collections.photos %}
{{ p | render_image }}
{% endfor %}
