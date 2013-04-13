class BrainFormBuilder < ActionView::Helpers::FormBuilder

	%w[text_field text_area password_field].each do |method_name|
	    define_method(method_name) do |name, *args|
	      #@template.content_tag :div, class: "rowElem noborder" do
	       # field_label(name, *args) + super(name, *args)
	      #end
	    	@template.content_tag :div, class: "rowElem" do
	      		label(name) + @template.content_tag(:div, class: "formRight") do 
	      			super(name, *args)
	      		end
	    	end
    	end
  	end 

	%w[collection_select select].each do |method_name|
	    define_method(method_name) do |name, *args|
	      @template.content_tag :div, class: "rowElem" do
	      	label(name) + 
      	 	@template.content_tag(:div, class: "formRight") do
		      	super(name, *args)
	    	end
	      end
	    end
  	end 

  	def number_field(name, *args)
		@template.content_tag :div, class: "rowElem" do
			label(name) + 
			@template.content_tag(:div, class: "formRight") do
				@template.content_tag(:span, class: "ui-spinner ui-widget ui-widget-content ui-corner-all") do
					super(name, { :id => "spinner-default", :class => "ui-spinner-input"}) 
				end
			end
		end
  	end

  	def check_box(name, *args)
  		@template.content_tag :div, class: "rowElem" do
			label(name) + 
			@template.content_tag(:div, class: "formRight") do
				super
			end
		end
	end

	def submit(name, *args)
		@template.content_tag :div, class: "submitForm" do
			@template.tag(:br)+ " " + super(name, :class => "basicBtn")
		end
	end


	private
	def field_label(name, *args)
		options = args.extract_options!
		label(name, options[:label])
	end
end