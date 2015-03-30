<?php

include_once("required.php");



/**
 * create the custom post type "property"
 *
 */

function create_post_type() {
  register_post_type( 'property',
    array(
      'labels' => array(
        'name' => __( 'Properties' ),
        'singular_name' => __( 'Property' )
      ),
      'public' => true,
      'has_archive' => true,
      // 'taxonomies' => array("property")
    )
  );
}

add_action( 'init', 'create_post_type' );



/**
 * register custom WP REST JSON API route
 *
 */

// include main property class
include_once(__DIR__ . '/libs/class-wp-json-property.php');

if ( ! function_exists ( 'wp_json_property_init' ) ) :

  /**
   * Init JSON REST API Property routes
   */
  function wp_json_property_init( $server ) {

    $class = new WP_JSON_Property( $server );
    add_filter( 'json_endpoints', array( $class, 'register_routes' ) );

  }
  add_action( 'wp_json_server_before_serve', 'wp_json_property_init' );

endif;



/**
 * create the custom taxonomy "property"
 *
 */

//create a custom taxonomy called property
function property_init() {
  // create a new taxonomy
  register_taxonomy(
    'property',
    'attachment', //default content type this taxonomy belongs to
    array(
      'label' => __( 'Property' ),
      'rewrite' => array( 'slug' => 'property' ),
    )
  );
}

add_action( 'init', 'property_init' );

//make custom taxonomy available to pages as well
function ngwp_add_property_tax_to_posts() {
    register_taxonomy_for_object_type( 'property', 'property' );
}

add_action( 'init' , 'ngwp_add_property_tax_to_posts' );



/**
 * add meta_data to all custom posts "property" always 
 * (even when not authenticated)
 *
 */

add_filter(
  "json_prepare_property", 
  function($data, $post, $context)
  {
    $data["property_data"] = array(
        "pris"=>get_post_meta($post["ID"], "pris", true),
        "bostadstyp"=>get_post_meta($post["ID"], "bostadstyp", true),
        "rum"=>get_post_meta($post["ID"], "rum", true),
        "boarea"=>get_post_meta($post["ID"], "boarea", true),
        "tomtarea"=>get_post_meta($post["ID"], "tomtarea", true),
        "avgift"=>get_post_meta($post["ID"], "avgift", true),
        "byggar"=>get_post_meta($post["ID"], "byggar", true),
        "stad"=>get_post_meta($post["ID"], "stad", true),
        "lan"=>get_post_meta($post["ID"], "lan", true),
        "kommun"=>get_post_meta($post["ID"], "kommun", true),
        "vaning"=>get_post_meta($post["ID"], "vaning", true),
        "balkong"=>get_post_meta($post["ID"], "balkong", true),
        "hiss"=>get_post_meta($post["ID"], "hiss", true),
      );
    return $data;
  }, 
  10, 
  3
);