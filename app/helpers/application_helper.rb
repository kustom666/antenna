module ApplicationHelper
	def brain_form_for(name, *args, &block)
		options = args.extract_options!
	 	
	 	form_for(name, *(args << options.merge(:builder => BrainFormBuilder).merge(:html => {:class => "mainForm", :id =>"usualValidate"})), &block)
	end
end
