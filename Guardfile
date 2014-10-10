guard :haml, input: 'app/templates', output: '.', run_at_start: true do
  watch /^*+\/[^_]\w*(\.haml)$/
end

guard :sass, input: 'app/stylesheets', output: 'public/stylesheets', run_at_start: true, all_on_start: true

guard :coffeescript, input: 'app/javascripts', output: 'public/javascripts', run_on_start: true, all_on_start: true